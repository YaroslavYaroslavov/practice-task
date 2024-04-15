const checkEmptyArray = (arr) => {
  if (arr.length === 0) {
    throw new Error("Массив не может быть пустым");
  } else {
    return "Массив содержит элементы";
  }
};
