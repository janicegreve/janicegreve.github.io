import { Link } from 'react-router';

export const FunkySection = ({ 
  title, 
  text, 
  linkTo, 
  linkText, 
  bgColor = "bg-white", 
  slant = "none", 
  children 
}) => {
  const slantClass = slant === "down" ? "slant-down" : slant === "up" ? "slant-up" : "";

  return (
    <section className={`relative funky-container ${bgColor} ${slantClass} -mt-20 first:mt-0 z-10`}>
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 font-emilys-candy">
          <h2 className="text-5xl">{title}</h2>
          <p className="text-xl leading-relaxed text-slate-700">{text}</p>
          <Link to={linkTo} className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full uppercase tracking-widest text-xs hover:bg-indigo-600 transition hover:scale-105">
            {linkText}
          </Link>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </section>
  );
}
