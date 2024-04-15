class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo() {
    console.log(
      `Название: ${this.title}, Автор: ${this.author}, Год публикации: ${this.year}`
    );
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Цена: ${this.price} руб.`);
  }
}
