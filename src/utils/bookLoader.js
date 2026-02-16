import books from '../content/books.json';

export const getBooks = (lang) => {
  return books.map(book => {
    const localizedBook = {
      id: book.id,
      cover: getCover(lang, book),
      ...book['en'],
      ...book[lang],
    };

    localizedBook.cover3d = getCover3d(lang, localizedBook);

    return localizedBook;
  });
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
  return new URL(`../assets/generated/${lang}/${book.id}.ribbon.webp`, import.meta.url).href;
}

const getCover3d = (lang, book) => {
  const version = book.status === "soon" ? ".ribbon" : "";
  return new URL(`../assets/generated/${lang}/${book.id}${version}.3d.webp`, import.meta.url).href;
}
