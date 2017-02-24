/* eslint-disable no-console */
const fs = require('fs');
const childProcess = require('child_process');
const chokidar = require('chokidar');
const sh = require('shelljs');
const { Observable } = require('rxjs');

function readFile(path, encoding) {
  return Observable.create((observer) => {
    fs.readFile(path, encoding, (_, data) => {
      observer.next(data);
      observer.complete();
    });
  });
}

function spawn(command, args, stdin) {
  return Observable.create((observer) => {
    const child = childProcess.spawn(command, args);

    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');

    child.stdout.on('data', (data) => {
      observer.next([data]);
    });

    child.stderr.on('data', (data) => {
      observer.next([null, data]);
    });

    child.on('close', () => {
      observer.complete();
    });

    // const child = childProcess.spawn(command, (err, stdout, stderr) => {
    //   if (err) {
    //     observer.error(stderr);
    //   } else {
    //     observer.next([stdout, stderr]);
    //     observer.complete();
    //   }

    //   child.kill();
    // });

    child.stdin.write(stdin);
    child.stdin.end();
  });
}

const fileWatcher = chokidar.watch('./code/**/*.js');

Observable.fromEvent(fileWatcher, 'change')
  .concatMap(path => readFile(path, 'utf8'))
  .map(contents => (`
    const { Observable } = require('rxjs');
    const axios = require('axios');

    const logError = console.error.bind(console);

    function fetchOrdersFromDb(callback) {
      axios.get('http://localhost:3000/orders')
        .then(({ data }) => callback(new Error('Uh oh'), data));
    }

    ${contents}
  `))
  .do(() => sh.exec('clear'))
  .concatMap(contents => spawn('node', ['--harmony', '--harmony_do_expressions'], contents))
  .catch((err, observable) => {
    console.error(err);
    return observable;
  })
  .subscribe(([stdout, stderr]) => {
    if (stdout) {
      console.log(stdout.trim());
    }

    if (stderr) {
      console.error(stderr.trim());
    }
  });
