function fetchCustomerNameForOrder(orderId) {
  return fetchOrder(orderId)
    .then(order => fetchCustomer(order.customerId))
    .then(customer => customer.name)
    .catch(err => {
      logError(err);
      throw err;
    });
}
