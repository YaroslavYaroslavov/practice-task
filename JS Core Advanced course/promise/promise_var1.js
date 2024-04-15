const asyncSequentialOperations = () => {
  function asyncOperation(operationName, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Выполняется операция: ${operationName}`);
        resolve(operationName);
      }, delay);
    });
  }

  asyncOperation("Операция 1", 1000)
    .then((operationName) => asyncOperation("Операция 2", 1500))
    .then((operationName) => asyncOperation("Операция 3", 500))
    .then((operationName) =>
      console.log("Серия асинхронных операций завершена")
    )
    .catch((error) => console.error("Произошла ошибка:", error));
};

asyncSequentialOperations();
