const source = Observable.merge(
  Observable.fromEvent(incrementBtn, 'click').mapTo(1),
  Observable.fromEvent(decrementBtn, 'click').mapTo(-1),
);

source
  .scan((acc, curr) => acc + curr, 0)
  .subscribe((counter) => {
    counterEl.innerHTML = counter;
  });
