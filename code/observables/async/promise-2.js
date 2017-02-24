fetchOrders()
  .then(orders => orders.filter(
    order => order.customerName === 'Tucker'
  ))
  .then(orders => orders.map(order => order.id))
  .then((orderIds) => {
    orderIds.forEach(id => console.log(id));
  });
