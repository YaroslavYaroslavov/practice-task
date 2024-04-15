const divideNumbers = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Второе число не может быть равно нулю");
  } else {
    return num1 / num2;
  }
};
