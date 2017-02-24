/* eslint-disable no-console */
const chokidar = require('chokidar');
const sh = require('shelljs');

const syntaxFiles = './code/**/*.js';
const copySyntax = './copy-syntax.sh';

chokidar.watch(syntaxFiles)
  .on('change', (path) => {
    sh.exec(`${copySyntax} ${path}`, (exitCode, _, stderr) => {
      if (exitCode !== 0) {
        console.error(`Error highlighting syntax for ${path}`);
        console.error(stderr);
      } else {
        console.log(`Syntax-highlighted code from ${path} copied to clipboard`);
      }
    });
  });
