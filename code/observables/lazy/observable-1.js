const o1 = fetchOrders();
const o2 = fetchOrders();
const o3 = fetchOrders();

o1.subscribe();
o2.subscribe();
o3.subscribe();
