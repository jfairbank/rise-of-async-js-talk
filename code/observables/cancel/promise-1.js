const promise = fetchOrders()
  .then((orders) => {
    orders.foreach((order) => {
      console.log(order);
    });
  });

promise.cancel();
