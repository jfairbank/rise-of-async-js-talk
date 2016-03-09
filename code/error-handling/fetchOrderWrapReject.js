function fetchOrder(orderId) {
  return new Promise((resolve, reject) => {
    $.get(`/orders/${orderId}`)
      .done(order => resolve(order))
      .fail(resp => {
        if (resp.status === 404) {
          reject(new Error('Order not found'));
        }
      });
  });
}
