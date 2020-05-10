function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
};

function addBook(library, book) {
  var genre = book.genre;
  library.shelves[genre].push(book);
};

function checkoutBook(library, bookTitle) {
  var shelfGenres = Object.keys(library.shelves);
  for (var i = 0; i < shelfGenres.length; i++) {
    var genre = shelfGenres[i];
    var booksFromShelf = library.shelves[genre];
    for (var j = 0; j < booksFromShelf.length; j++) {
      if (booksFromShelf[j].title === bookTitle) {
        booksFromShelf.splice(j, 1);
        return `You have now checked out ${bookTitle} from the ${library.name}`;
      }
    }
  };
  return "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library"
};

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
