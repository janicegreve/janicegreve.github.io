import clsx from 'clsx';

export const Books = () => {
  return (
    <div className={clsx(
      "bg-linear-to-br from-pink-200 to-pink-500",
      "rounded-lg p-8 shadow-2xl",
      "flex flex-col items-center",
      )}>
      <img 
        src="/avajones3d.webp" 
        alt="Ava Jones: The End And The Beginning" 
        className="w-64 md:w-80 justify-center transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
