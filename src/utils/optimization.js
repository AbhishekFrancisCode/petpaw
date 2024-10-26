export const debounceFunc = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeOut(timer);
    timer = setTimeOut(() => {
      func.apply(context, args);
    }, delay);
  };
};

export const throttleFunc = (func, interval) => {
  let shouldFire = true;
  return function () {
    if (shouldFire) {
      func();
      shouldFire = false;
      setTimeOut(() => {
        shouldFire = true;
      }, interval);
    }
  };
};
