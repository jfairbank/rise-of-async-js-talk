promise.then(() => {
  throw new Error('Fail');
});

new Promise((resolve, reject) => {
  reject(new Error('Fail'));
});
