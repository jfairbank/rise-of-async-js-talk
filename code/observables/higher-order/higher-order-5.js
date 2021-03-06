const { Observable } = require('rxjs');

Observable.of(1, 2, 3)
  .mergeMap(n => (
    Observable.of(n * 2).delay(1000)
  ), 1)
  .subscribe(x => console.log(x));

// <tick>
// 2
// <tick>
// 4
// <tick>
// 6
