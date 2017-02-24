// const source = Observable.create((subscriber) => {
//   fetchOrdersFromDb((err, orders) => {
//     if (err) {
//       subscriber.error(err);
//     } else {
//       subscriber.next(orders);
//       subscriber.complete();
//     }
//   });
// });

fetchOrders()
  .catch((e) => {
    logError(e);
    return Observable.of([]);
  })
  .subscribe(x => console.log(x));
