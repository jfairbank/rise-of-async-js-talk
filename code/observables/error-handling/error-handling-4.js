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

fetchOrders()
  .retry(3)
  .subscribe({
    next: x => console.log(x),
    error: e => console.error(e),
  });
