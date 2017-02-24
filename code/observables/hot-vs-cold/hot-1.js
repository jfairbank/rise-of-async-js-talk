class WebSocket {
  constructor() {
    this.listeners = [];

    Observable.range(1, 5)
      .concatMap(n => Observable.of(n).delay(Math.random() * 1000))
      .subscribe(x => this.emit(x));
  }

  emit(data) {
    const event = { data };

    this.listeners.forEach((listener) => {
      listener(event);
    });
  }

  addEventListener(_, listener) {
    this.listeners.push(listener);
  }
}

const socket = new WebSocket('ws://example.com');

const stream = Observable.create((subscriber) => {
  socket.addEventListener('message', (event) => {
    subscriber.next(event.data);
  });
});

const sub1 = stream.subscribe(x => console.log('sub1', x));
const sub2 = stream.subscribe(x => console.log('sub2', x));
