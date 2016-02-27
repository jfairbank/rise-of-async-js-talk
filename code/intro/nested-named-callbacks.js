function handleCustomer(done, fail) {
  return function(err, customer) {
    if (err) {
      logError(err);
      fail(err);
    } else {
      done(customer.name);
    }
  };
}
function handleOrder(done, fail) {
  return function(err, order) {
    if (err) {
      logError(err);
      fail(err);
    } else {
      fetchCustomer(
        order.customerId,
        handleCustomer(done, fail)
      );
    }
  };
}
function fetchCustomerNameForOrder(orderId, done, fail) {
  fetchOrder(orderId, handleOrder(done, fail));
}
