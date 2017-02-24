fetchOrders()
  .mergeAll()
  .filter(
    order => order.customerName === 'Tucker'
  )
  .map(order => order.id)
  .subscribe(id => console.log(id));
