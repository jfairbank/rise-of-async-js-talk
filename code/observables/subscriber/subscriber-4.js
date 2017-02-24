function fetchOrders() {
  return Observable.create((subscriber) => {
    fetchOrdersFromDb((orders) => {
      subscriber.next(orders);
      subscriber.complete();
    });
  });
}

fetchOrders().mergeAll().subscribe({
  next: x => console.log(x),
  complete: () => console.log('Done!'),
});
