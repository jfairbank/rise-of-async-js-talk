Observable.from(Promise.resolve('world'))
  .subscribe(x => console.log(x));

function* greeting() {
  yield 'hello';
}

Observable.from(greeting())
  .subscribe(x => console.log(x));

// hello
// world
