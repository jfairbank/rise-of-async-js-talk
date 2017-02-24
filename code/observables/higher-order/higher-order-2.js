const { Observable } = require('rxjs');

Observable.of(1, 2, 3)
  .map(n => Observable.of(n * 2))
  .mergeAll()
  .subscribe(x => console.log(x));

// 2
// 4
// 6
