const sumOfRange = (arr) => {
  const filteredArray = arr.filter((num) => num > 0 && num < 10);
  return filteredArray.reduce((acc, curr) => acc + curr, 0);
};
