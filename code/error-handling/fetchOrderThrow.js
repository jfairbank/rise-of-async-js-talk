function fetchOrder(orderId) {
  return fetch(`/orders/${orderId}`)
    .then(resp => {
      if (resp.status === 404) {
        throw new Error('Order not found');
      }
      return resp.json();
    });
}
