const checkInteger = (num) => {
  if (!Number.isInteger(num)) {
    throw new Error("Введенное значение не является целым числом");
  } else {
    console.log("Введенное значение является целым числом");
  }
};
