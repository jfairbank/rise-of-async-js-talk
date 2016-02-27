async function printOrder(orderId) {
  const order = await fetchOrder(orderId);
  console.log(order);
}

printOrder(1);
