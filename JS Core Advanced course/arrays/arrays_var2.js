const sumOfFirstHalf = (arr) => {
  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const sum = firstHalf.reduce((acc, curr) => acc + curr, 0);

  return sum;
};
