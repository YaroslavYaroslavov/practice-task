const repeatOperation = (operation, interval, repetitions) => {
  let counter = 0;
  let intervalId = setInterval(() => {
    operation();
    counter++;
    if (counter === repetitions) {
      clearInterval(intervalId);
    }
  }, interval);
};
