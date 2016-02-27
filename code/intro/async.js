async function fetchCustomerNameForOrder(orderId) {
  try {
    const order = await fetchOrder(orderId);
    const customer = await fetchCustomer(order.customerId);

    return customer.name;
  } catch (err) {
    logError(err);
    throw err;
  }
}
