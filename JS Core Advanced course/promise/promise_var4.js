const fetchData = (callback) => {
  setTimeout(() => {
    let data = { name: "John", age: 30 };
    callback(null, data);
  }, 1000);
};

const fetchDataPromisified = () => {
  return new Promise((resolve, reject) => {
    fetchData((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

fetchDataPromisified()
  .then((data) => {
    console.log("Данные получены успешно:", data);
  })
  .catch((error) => {
    console.error("Произошла ошибка при получении данных:", error);
  });
