import books from '../content/books.json';

export const getBooks = (lang) => {
  return books.map(book => ({
    id: book.id,
    ...book['en'],
    ...book[lang],
  }));
};

export const getBookById = (lang, id) => getBooks(lang).find(b => b.id === id);

export const getReviews = (lang, book) => {
  const reviews = book.reviews;

  if (!reviews) return [];

  return [
    ...reviews.filter(review => review.lang === lang),
    ...reviews.filter(review => review.lang !== lang),
  ];
}
