const sumOfSquares = (arr) => {
  const squaredArray = arr.map((num) => Math.pow(num, 2));
  return squaredArray.reduce((acc, curr) => acc + curr, 0);
};
