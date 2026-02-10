export const BookTitle = ({ book, textClass = "text-base" }) => {
  return (
    <div className={`flex flex-col items-center ${textClass}`}>
      {book.titles.map((title, i) => (
        <div key={i} className={title.tailwindCss}>
          {title.text}
        </div>
      ))}
    </div>
  );
};
