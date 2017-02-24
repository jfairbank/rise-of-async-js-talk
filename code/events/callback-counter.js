let counter = 0;

function updateCounter(n) {
  counter += n;
  counterEl.innerHTML = counter;
}

incrementEl.addEventListener('click', () => {
  updateCounter(1);
});

decrementEl.addEventListener('click', () => {
  updateCounter(-1);
});
