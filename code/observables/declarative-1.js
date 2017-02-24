Observable.of(1, 2, 3)
  .map(n => n * 2)
  .subscribe(x => console.log(x));

// 2
// 4
// 6
