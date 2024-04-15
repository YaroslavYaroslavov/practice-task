const accessUndefinedVariable = () => {
  try {
    console.log(undefinedVariable);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Ошибка ReferenceError: Переменная не определена");
    } else {
      throw error;
    }
  }
};
