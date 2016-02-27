async function printOrder(orderId) {
  const promise = Promise.resolve(fetchOrder(orderId));

  return promise.then(order => {
    console.log(order);
    return Promise.resolve(undefined);
  });
}

printOrder(1);
