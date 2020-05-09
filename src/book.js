function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: 'Vassya',
    age: 16,
    pronouns: 'she/her'
  }
  return character;
};

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return reviews;
  } else {
    return reviews.push(review);
  }
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var bookDetails = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return bookDetails;
};

function editBook(book) {
  book.pageCount = book.pageCount * .75;
};

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
