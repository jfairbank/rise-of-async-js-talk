/* eslint-disable no-await-in-loop,no-restricted-syntax */
import resourceTimer from './resourceTimer';
import { mockRequest } from './util';

export async function sequential(resources, log) {
  for (const resource of resources) {
    resourceTimer.stopWaitTime(resource, log);
    resourceTimer.startResponseTime(resource);

    await mockRequest(resource.url);

    resourceTimer.stopResponseTime(resource, log);
  }
}

export async function parallel(resources, log) {
  await Promise.all(resources.map((resource) => {
    resourceTimer.stopWaitTime(resource, log);
    resourceTimer.startResponseTime(resource);

    return mockRequest(resource.url)
      .then(() => resourceTimer.stopResponseTime(resource, log));
  }));
}
