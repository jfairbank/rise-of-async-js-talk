fetchOrders()
  .catch((e) => {
    logError(e);
    return Observable.of([]);
  })
  .subscribe(x => console.log(x));
