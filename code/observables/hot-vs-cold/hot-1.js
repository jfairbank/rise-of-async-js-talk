const socket = new WebSocket('ws://example.com');

const stream = Observable.create((subscriber) => {
  socket.addEventListener('message', (event) => {
    subscriber.next(event.data);
  });
});

const sub1 = stream.subscribe(x => console.log('sub1', x));
const sub2 = stream.subscribe(x => console.log('sub2', x));
