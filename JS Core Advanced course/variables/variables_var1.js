function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Видна вне блока, потому что var создает переменную с областью видимости внутри функции
}

testVar();

function testLet() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Не видна вне блока, потому что let создает переменную с блочной областью видимости
}

testLet();

function testConst() {
  if (true) {
    const x = 10;
  }
  console.log(x); // Не видна вне блока, потому что const также создает переменную с блочной областью видимости
}

testConst();
