let counter = 0;

async function listenIncrement() {
  await click(incrementEl);
  counter += 1;
  counterEl.innerHTML = counter;
  listenIncrement();
}

listenIncrement();
