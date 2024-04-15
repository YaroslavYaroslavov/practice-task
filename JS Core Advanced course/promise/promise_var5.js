let firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

firstPromise
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * result);
      }, 3000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * result);
      }, 3000);
    });
  })
  .then((result) => {
    console.log("Итоговый результат:", result);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
