import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

export const FunkySection = ({
  title,
  text,
  linkTo,
  linkText,
  bgColor = "bg-white",
  slant = "none",
  position = "middle", // top / middle / bottom
  sectionClass = "",
  children
}) => {
  const slantClass = slant === "down" ? "slant-down" : slant === "up" ? "slant-up" : "";
  const marginClass = position === "top" ? "" : "-mt-50";
  const paddingClass = position === "bottom" ? "" : "pb-30";

  return (
    <section className={twMerge(`relative ${bgColor} ${slantClass} ${marginClass} pt-24 pb-32 z-10`, sectionClass)}>
      <div className={`max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 ${paddingClass} gap-12 items-center`}>
        <div className="space-y-6 font-emilys-candy">
          <h2 className="text-5xl text-center md:text-left">{title}</h2>
          <p className="text-xl leading-relaxed text-justify md:text-left text-slate-700">{text}</p>
          <Link to={linkTo} className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full uppercase tracking-widest text-xs hover:bg-indigo-600 transition hover:scale-105">
            {linkText}
          </Link>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </section>
  );
}
