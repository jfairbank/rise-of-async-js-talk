function fetchCustomerNameForOrder(orderId) {
  return Promise.resolve(fetchOrder(orderId))
    .then(order => {
      return Promise.resolve(fetchCustomer(order.customerId))
        .then(customer => {
          return Promise.resolve(customer.name);
        });
    });
}
