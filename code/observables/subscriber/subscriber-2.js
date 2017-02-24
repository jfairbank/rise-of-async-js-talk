const subscriber = {
  next: x => console.log(x),
};

Observable.of(1, 2, 3)
  .subscribe(subscriber);
