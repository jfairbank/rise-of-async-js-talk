function timerKey(prefix, url, type) {
  return [
    prefix ? `${prefix}:` : '',
    url,
    type,
  ].join(' ');
}

export default {
  generateResources(prefix) {
    return this.timedResources([
      { prefix, url: '/orders/1' },
      { prefix, url: '/orders/2' },
      { prefix, url: '/orders/3' },
    ]);
  },

  timedResources(resources) {
    resources.forEach(this.startWaitTime.bind(this));

    return resources;
  },

  startTimer({ prefix, url }, type) {
    performance.mark(timerKey('start', url, type));
  },

  stopTimer({ prefix, url }, type, log) {
    const key = timerKey('', url, type);
    const startKey = timerKey('start', url, type);
    const stopKey = timerKey('stop', url, type);

    performance.mark(stopKey);
    performance.measure(key, startKey, stopKey);

    const { duration } = performance.getEntriesByName(key)[0];
    performance.clearMeasures(key);

    log(`${prefix}: ${url} ${type} time: ${duration.toFixed(2)}ms`);
  },

  startWaitTime(resource) {
    this.startTimer(resource, 'wait');
  },

  stopWaitTime(resource, log) {
    this.stopTimer(resource, 'wait', log);
  },

  startResponseTime(resource) {
    this.startTimer(resource, 'response');
  },

  stopResponseTime(resource, log) {
    this.stopTimer(resource, 'response', log);
  },
};
