const source = Observable.create((subscriber) => {
  subscriber.next(1);
  subscriber.error(new Error('Uh oh'));
  subscriber.next(2);
});

source.subscribe(x => console.log(x));
