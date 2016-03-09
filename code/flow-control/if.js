async function findOrCreateOrder(orderId) {
  let order;

  if (await orderExists(orderId)) {
    order = await fetchOrder(orderId);
  } else {
    order = await createOrder();
  }

  return order;
}
