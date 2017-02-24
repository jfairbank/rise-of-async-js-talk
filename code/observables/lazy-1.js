Observable.range(1, 100)
  .map(n => n * 2)
  .filter(n => n > 4)
  .take(2)
  .subscribe(x => console.log(x));

// 6
// 8
