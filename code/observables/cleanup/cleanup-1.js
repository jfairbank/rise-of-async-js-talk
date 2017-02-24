function fetchOrdersStream() {
  return Observable.create((subscriber) => {
    const socket = new WebSocket('ws://example.com');

    socket.addEventListener('message', (event) => {
      subscriber.next(event.data);
    });

    return () => {
      socket.close();
    };
  });
}
