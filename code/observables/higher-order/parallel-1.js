const source = Observable.forkJoin(
  fetchOrder(1),
  fetchOrder(2),
  fetchOrder(3)
);

source.subscribe(x => console.log(x));

// [ { response: { id: 1, name: 'Order 1' } },
//   { response: { id: 2, name: 'Order 2' } },
//   { response: { id: 3, name: 'Order 3' } } ]
