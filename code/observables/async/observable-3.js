function fetchOrders() {
  return Observable.ajax.get('/orders');
}

fetchOrders()
  .mergeAll()
  .subscribe(x => console.log(x));
