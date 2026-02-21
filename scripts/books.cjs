const rawBooks = require('../src/content/books.json');

exports.getLocalizedBooks = (lang) => {
  return rawBooks.map(book => ({
    id: book.id,
    excludeBook: book.excludeBook,
    ...book['en'],
    ...book[lang],
  }))
  .filter(book => !book.excludeBook);
}
