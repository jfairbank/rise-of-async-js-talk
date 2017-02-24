const { Observable } = require('rxjs');

Observable.of(1, 2, 3)
  .map(n => Observable.of(n * 2))
  .subscribe(x => console.log(x));

// ScalarObservable { value: 2 }
// ScalarObservable { value: 4 }
// ScalarObservable { value: 6 }
