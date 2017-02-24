Object.defineProperty(Observable.ajax, 'get', {
  value(url) {
    return Observable.create((observer) => {
      axios.get(`http://localhost:3000${url}`)
        .then(({ data }) => {
          observer.next({ response: data });
          observer.complete();
        });
    });

    // const id = url.replace(/^.*\/(\d+)\/?$/, '$1');
    // return Observable.of({
    //   response: {
    //     id,
    //     name: `Order ${id}`,
    //   },
    // });
  },
});

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
