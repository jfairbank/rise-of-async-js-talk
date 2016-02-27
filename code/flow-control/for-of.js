async function printOrders(orderIds) {
  for (const id of orderIds) {
    const order = await fetchOrder(id);
    console.log(order);
  }
}
