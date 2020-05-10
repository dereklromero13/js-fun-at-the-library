function shelfBook(scifiBook, scifiShelf) {
  if (scifiShelf.length < 3) {
    scifiShelf.unshift(scifiBook)
  }
};

function unshelfBook(book, scifiShelf) {
  for (var i = 0; i < scifiShelf.length; i++) {
    if (scifiShelf[i].title === "Dune") {
      scifiShelf.splice(i, 1)
    }
  }
};

function listTitles(fantasyShelf) {
  var titleList = [];
  for (var i = 0; i < fantasyShelf.length; i++) {
    titleList.push(fantasyShelf[i].title);
  }
  var arrayIntoString = titleList.join(', ');
  return arrayIntoString;
};

function searchShelf(scifiShelf, book) {
  for ( var i = 0; i < scifiShelf.length; i++ ) {
    if (scifiShelf[i].title === book)
    return true;
  }
    return false;
};

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
