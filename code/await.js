function fetchOrder(orderId) {
  return fetch(`/orders/${orderId}`)
    .then(response => response.json());
}

async printOrder(orderId) {
  const order = await fetchOrder(orderId);
  console.log(order);
}

function printOrder(orderId) {
  fetchOrder(orderId)
    .then(order => console.log(order));
}
