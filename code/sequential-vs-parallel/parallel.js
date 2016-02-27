async function printOrders(orderIds) {
  const orders = await Promise.all(
    orderIds.map(fetchOrder)
  );

  orders.forEach(order => console.log(order));
}

printOrders([1, 2, 3]);

await Promise.all([
  fetchOrder(1),
  fetchOrder(2),
  fetchOrder(3)
]);
