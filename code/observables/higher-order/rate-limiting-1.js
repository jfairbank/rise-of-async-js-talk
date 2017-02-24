Observable.of(1, 2, 3)
  .concatMap((id) => {
    const url = `/orders/${id}`;
    return Observable.ajax.get(url).delay(1000);
  })
  .bufferCount(3)
  .subscribe(x => console.log(x));

// [ { id: '1', name: 'Order 1' },
//   { id: '2', name: 'Order 2' },
//   { id: '3', name: 'Order 3' } ]
