Observable.of(1, 2, 3)
  .subscribe({
    next: x => console.log(x),
    complete: () => console.log('Done!'),
  });

// 1
// 2
// 3
// Done!
