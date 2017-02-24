const source = Observable.create((subscriber) => {
  subscriber.next(1);
  subscriber.error(new Error('Uh oh'));
  subscriber.next(2);
});

source.subscribe({
  next: x => console.log(x),
  complete: () => console.log('Done!'),
  error: e => console.error(e),
});

// 1
// Error: Uh oh
