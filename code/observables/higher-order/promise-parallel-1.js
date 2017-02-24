const promise = Promise.all([
  fetchOrder(1),
  fetchOrder(2),
  fetchOrder(3),
]);

promise.then(x => console.log(x));

// [ { id: '1', name: 'Order 1' },
//   { id: '2', name: 'Order 2' },
//   { id: '3', name: 'Order 3' } ]
