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
