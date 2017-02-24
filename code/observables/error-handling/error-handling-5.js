function fetchOrders() {
  return Observable.create((subscriber) => {
    fetchOrdersFromDb((err, orders) => {
      if (err) {
        subscriber.error(err);
      } else {
        subscriber.next(orders);
        subscriber.complete();
      }
    });
  });
}

function legacyFetchOrders() {
  return Observable.create((subscriber) => {
    fetchOrdersFromDb((err, orders) => {
      if (err) {
        subscriber.error(new Error('nope'));
      } else {
        subscriber.next(orders);
        subscriber.complete();
      }
    });
  });
}

fetchOrders()
  .catch((e) => {
    logError(e);

    return legacyFetchOrders()
      .catch((e2) => {
        logError(e2);
        return Observable.of([]);
      })
  })
  .subscribe(x => console.log(x));
