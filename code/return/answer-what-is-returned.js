async function meaningOfLife() {
  return 42;
}

function meaningOfLife() {
  return Promise.resolve(42);
}

meaningOfLife()
  .then(answer => answer === 42);
