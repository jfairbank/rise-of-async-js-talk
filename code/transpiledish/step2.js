async function printOrder(orderId) {
  const promise = Promise.resolve(fetchOrder(orderId));

  console.log(order);
}

printOrder(1);
