class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };

  greetPatron(patron, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patron}!`;
    } else {
      return `Hello, ${patron}!`;
    }
  };

  findBook(book) {
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (book === this.library.shelves.fantasy[i].title) {
        this.library.shelves.fantasy.splice(i, 1)
        return `Yes, we have ${book}`;
      }
    }
    return `Sorry, we do not have ${book}`;
  };
};

module.exports = Librarian;
