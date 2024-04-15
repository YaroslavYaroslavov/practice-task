const sumFirstAndLastDigit = (number) => {
  const numStr = number.toString();

  const firstDigit = parseInt(numStr.charAt(0));

  const lastDigit = parseInt(numStr.charAt(-1));
  const sum = firstDigit + lastDigit;

  console.log(sum);
};
