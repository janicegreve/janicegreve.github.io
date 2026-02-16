const rawBooks = require('../src/content/books.json');

exports.getLocalizedBooks = (lang) => {
  return rawBooks.map(book => ({
    id: book.id,
    ...book['en'],
    ...book[lang],
  }));
}
