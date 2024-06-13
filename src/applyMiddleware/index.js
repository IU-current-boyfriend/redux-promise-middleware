export const reduxPromise = ({
  dispatch,
  getState
}) => next => action => {
  // next就是Dispatch方法
  if (action instanceof Promise) {
    return (async () => {
      const { type, payload } = await action;
      return next({type, payload});
    })();
  }
  return next(action);
}
