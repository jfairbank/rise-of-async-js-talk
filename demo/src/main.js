import resourceTimer from './resourceTimer';
import { time } from './util';
import * as runners from './runners';
import { clear } from './logger';

const sequential = document.querySelector('#sequential');
const parallel = document.querySelector('#parallel');

let running = false;

function disable() {
  running = true;
  sequential.disabled = parallel.disabled = true;
}

function enable() {
  running = false;
  sequential.disabled = parallel.disabled = false;
}

function hideCodeBlocks() {
  Array.from(document.querySelectorAll('.code-block')).forEach(el => {
    el.classList.add('hide');
  });
}

function showCodeBlock(type) {
  document.getElementById(`${type}-code`).classList.remove('hide');
}

const run = (type) => async function typeAppliedRun() {
  if (running) {
    return;
  }

  hideCodeBlocks();
  showCodeBlock(type);

  const fn = ::runners[type];

  clear();
  disable();

  await time(type, () => fn(resourceTimer.generateResources(type)));

  enable();
};

sequential.addEventListener('click', run('sequential'));
parallel.addEventListener('click', run('parallel'));
