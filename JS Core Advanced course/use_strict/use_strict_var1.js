"use strict";

const countFactorial = (number) => {
  if (isNaN(number)) {
    throw new Error("only numbers");
  }
  if (number < 0) {
    throw new Error("only positive numbers");
  }
  if (!Number.isInteger(number)) {
    throw new Error("only integer numbers");
  }
  return number === 0 ? 1 : number * countFactorial(number - 1);
};
// try {
//   console.log(countFactorial(-1));
// } catch (error) {
//   console.log(error);
// }
// try {
//   console.log(countFactorial("asd"));
// } catch (error) {
//   console.log(error);
// }
// try {
//   console.log(countFactorial(5));
// } catch (error) {
//   console.log(error);
// }
