Observable.of([1, 2, 3])
  .mergeAll()
  .subscribe(x => console.log(x));

// 1
// 2
// 3
