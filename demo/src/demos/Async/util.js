const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const responseTimes = {
  '/orders/1': 1000,
  '/orders/2': 6000,
  '/orders/3': 2000,
};

export async function mockRequest(url) {
  const responseTime = responseTimes[url] || 1000;
  await delay(responseTime);
  return {};
}

export async function time(name, log, fn) {
  const start = performance.now();
  await fn();
  const end = (performance.now() - start).toFixed(2);
  log(`${name} total time: ${end}ms`);
}
