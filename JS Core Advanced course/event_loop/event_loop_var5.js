const processData = (data) => {
  return new Promise((resolve, reject) => {
    if (typeof data !== "number") {
      reject("Error");
    } else if (data % 2 !== 0) {
      setTimeout(() => {
        resolve("Odd");
      }, 1000);
    } else {
      setTimeout(() => {
        resolve("Even");
      }, 2000);
    }
  });
};
