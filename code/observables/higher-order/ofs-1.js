Observable.of(Promise.resolve('world'))
  .mergeAll()
  .subscribe(x => console.log(x));

function* greeting() {
  yield 'hello';
}

Observable.of(greeting())
  .mergeAll()
  .subscribe(x => console.log(x));

// hello
// world
