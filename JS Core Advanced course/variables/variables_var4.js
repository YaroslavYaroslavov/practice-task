function testFunction() {
  var varVariable = "This is a var variable";
  let letVariable = "This is a let variable";
  const constVariable = "This is a const variable";
}

testFunction();

console.log(varVariable); // Эта строка вызовет ошибку, потому что переменная varVariable объявлена с использованием var, и её область видимости ограничена функцией
// console.log(letVariable); // Эта строка также вызовет ошибку, потому что переменная letVariable объявлена с использованием let и также не видна за пределами функции
// console.log(constVariable); // Эта строка также вызовет ошибку, потому что переменная constVariable объявлена с использованием const и имеет также блочную область видимости внутри функции
