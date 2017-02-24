Observable.fromEvent(incrementBtn, 'click')
  .mapTo(1)
  .scan((acc, curr) => acc + curr, 0)
  .subscribe((counter) => {
    counterEl.innerHTML = counter;
  });
