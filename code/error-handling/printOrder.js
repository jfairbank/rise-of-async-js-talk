async function printOrder(orderId) {
  try {
    const order = await fetchOrder(orderId);
    console.log(order);
  } catch (e) {
    console.log('Error retrieving order', e);
  }
}
