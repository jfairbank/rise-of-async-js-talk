function fetchOrders() {
  return Observable.create((subscriber) => {
    fetchOrdersFromDb((orders) => {
      subscriber.next(orders);
      subscriber.complete();
    });
  });
}

fetchOrders().mergeAll()
  .subscribe(x => console.log(x));
