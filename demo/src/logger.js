const container = document.querySelector('#logger');

export function log(...args) {
  const div = document.createElement('div');
  div.innerHTML = args.join(' ');
  container.appendChild(div);
}

export function clear() {
  container.innerHTML = '';
}
