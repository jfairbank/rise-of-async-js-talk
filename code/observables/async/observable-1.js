fetchOrders()
  .subscribe((orders) => {
    orders.forEach((order) => {
      console.log(order);
    });
  });
