import books from '../content/books.json';

export const getBooks = (lang) => {
  return books.map(book => {
    const localizedBook = {
      id: book.id,
      excludeBook: book.excludeBook,
      ...book['en'],
      ...book[lang],
    };

    localizedBook.cover = getCover(lang, localizedBook);
    localizedBook.cover3d = getCover3d(lang, localizedBook);

    return localizedBook;
  })
  .filter(book => !book.excludeBook);
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

const getCover = (lang, book) => {
  const version = book.showRibbon === false ? "" : ".ribbon";
  return new URL(`../assets/generated/${lang}/${book.id}${version}.webp`, import.meta.url).href;
}

const getCover3d = (lang, book) => {
  const version = book.showRibbon === false || ["now", "new"].includes(book.status) ? "" : ".ribbon";
  return new URL(`../assets/generated/${lang}/${book.id}${version}.3d.webp`, import.meta.url).href;
}
