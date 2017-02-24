class Observable {
  static create(generate) {
    return new Observable(generate);
  }

  static of(...values) {
    return Observable.from(values);
  }

  static from(values) {
    return new Observable((observer) => {
      values.forEach(value => observer.next(value));
    });
  }

  constructor(generate) {
    this.generate = generate;
  }

  map(fn) {
    return new Observable(observer => this.subscribe((x) => {
      observer.next(fn(x));
    }));
  }

  subscribe(subscriber) {
    const observer = { next: subscriber };
    this.generate(observer);
  }
}

const source = new Observable((observer) => {
  setTimeout(() => {
    observer.next(1);
    observer.next(2);
    observer.next(3);

    setTimeout(() => {
      observer.next(4);
      observer.next(5);
      observer.next(6);
    }, 1000);
  }, 1000);
});

// const source = Observable.of(1, 2, 3);

source
  .map(n => n * 2)
  .subscribe(x => console.log(x));
