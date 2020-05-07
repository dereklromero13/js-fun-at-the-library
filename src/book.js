function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character ={
    name: 'Vassya',
    age: 16,
    pronouns: 'she/her'
  }
  return character;
};

function saveReview(string, reviews) {
  if (reviews.includes(string)) {
    return reviews;
  } else {
  return reviews.push(string)
  }
};


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
