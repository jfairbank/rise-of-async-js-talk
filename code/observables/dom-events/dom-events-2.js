const { Observable } = require('rxjs');

const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const counterEl = document.getElementById('counter');

const source = Observable.merge(
  Observable.fromEvent(incrementBtn, 'click').mapTo(1),
  Observable.fromEvent(decrementBtn, 'click').mapTo(-1),
);

source
  .scan((acc, curr) => acc + curr, 0)
  .subscribe((counter) => {
    counterEl.innerHTML = counter;
  });
