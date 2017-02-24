fetchOrders()
  .retry(2)
  .subscribe({
    next: x => console.log(x),
    error: e => console.error(e),
  });
