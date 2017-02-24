async function printCustomerNames() {
  const orders = await fetchOrders();
  const filtered = orders.filter(
    order => order.customerName === 'Tucker'
  );
  const orderIds = filtered.map(order => order.id);

  orderIds.forEach(id => console.log(id));
}
