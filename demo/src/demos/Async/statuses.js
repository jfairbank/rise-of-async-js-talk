export const READY = 0;
export const RUNNING_SEQUENTIAL = 1;
export const RUNNING_PARALLEL = 2;
export const DONE_SEQUENTIAL = 3;
export const DONE_PARALLEL = 4;

export const isStatus = status => otherStatus => otherStatus === status;

export const isRunningSequential = isStatus(RUNNING_SEQUENTIAL);
export const isRunningParallel = isStatus(RUNNING_PARALLEL);
export const isDoneSequential = isStatus(DONE_SEQUENTIAL);
export const isDoneParallel = isStatus(DONE_PARALLEL);

export function isRunning(status) {
  return isRunningSequential(status) || isRunningParallel(status);
}
