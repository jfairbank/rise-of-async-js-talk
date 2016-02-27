import { log } from './logger';

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

const responseTimes = {
  '/orders/1': 1000,
  '/orders/2': 6000,
  '/orders/3': 2000
};

export async function mockRequest(url) {
  const responseTime = responseTimes[url] || 1000;
  await sleep(responseTime);
  return {};
}

export async function time(name, fn) {
  const start = performance.now();
  await fn();
  const end = (performance.now() - start).toFixed(2);
  log(`${name} total time: ${end}ms`);
}
