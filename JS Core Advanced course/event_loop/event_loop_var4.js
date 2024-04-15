const countNumbers = (currentNumber) => {
  return new Promise((resolve, reject) => {
    if (currentNumber <= 10) {
      setTimeout(() => {
        console.log(currentNumber);
        resolve(currentNumber);
      }, 1000);
    } else {
      reject("Промис завершен");
    }
  }).then(function () {
    return countNumbers(currentNumber + 1);
  });
};
