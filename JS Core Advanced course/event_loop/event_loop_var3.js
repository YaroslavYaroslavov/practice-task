const randomNumberPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Сгенерированное число:", randomNumber);

    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(
          `Сгенерированное число (${randomNumber}) от 1 до 5, промис успешно выполнен.`
        );
      } else {
        reject(
          `Сгенерированное число (${randomNumber}) от 6 до 10, промис завершается с ошибкой.`
        );
      }
    }, randomNumber * 1000);
  });
};
