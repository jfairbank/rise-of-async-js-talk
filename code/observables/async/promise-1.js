fetchOrders()
  .then((orders) => {
    orders.forEach((order) => {
      console.log(order);
    });
  });
