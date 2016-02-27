import resourceTimer from './resourceTimer';
import { mockRequest } from './util';

async function sequential(resources) {
  for (const resource of resources) {
    resourceTimer.stopWaitTime(resource);
    resourceTimer.startResponseTime(resource);

    await mockRequest(resource.url);

    resourceTimer.stopResponseTime(resource);
  }
}

async function parallel(resources) {
  await Promise.all(resources.map(resource => {
    resourceTimer.stopWaitTime(resource);
    resourceTimer.startResponseTime(resource);

    return mockRequest(resource.url)
      .then(() => resourceTimer.stopResponseTime(resource));
  }));
}

export { sequential, parallel };
