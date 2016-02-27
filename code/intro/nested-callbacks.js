function fetchCustomerNameForOrder(orderId, done, fail) {
  fetchOrder(orderId, function(err, order) {
    if (err) {
      logError(err);
      fail(err);
    } else {
      fetchCustomer(
        order.customerId,
        function(err, customer) {
          if (err) {
            logError(err);
            fail(err);
          } else {
            done(customer.name);
          }
        }
      );
    }
  });
}
