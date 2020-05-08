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

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  // searchShelf: searchShelf
};
