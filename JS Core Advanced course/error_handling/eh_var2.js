const accessProperty = (obj) => {
  try {
    console.log(obj.property);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(
        "Ошибка TypeError: Свойство не определено или объект нулевой"
      );
    } else {
      throw error;
    }
  }
};
