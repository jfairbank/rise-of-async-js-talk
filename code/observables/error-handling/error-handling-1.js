// // Observable.fromPromise(Promise.reject('lol')).subscribe(x => console.log(x))
// const source = Observable.create((subscriber) => {
//   fetchOrdersFromDb((err, orders) => {
//     if (err) {
//       try {
//         subscriber.error(err);
//         console.log('after');
//       } catch (e) {
//         console.log('it threw', e);
//       }
//     } else {
//       subscriber.next(orders);
//       subscriber.complete();
//     }
//   });
// });

// // source.subscribe(x => console.log(x));
// source.subscribe({
//   next: x => console.log(x),
//   error: e => console.error(e),
// });

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
