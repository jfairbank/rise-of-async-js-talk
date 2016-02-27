async function printOrders(orderIds) {
  for (const id of orderIds) {
    const order = await fetchOrder(id);
    console.log(order);
  }
}

printOrders([1, 2, 3]);

await fetchOrder(1);
await fetchOrder(2);
await fetchOrder(3);
