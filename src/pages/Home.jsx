import clsx from 'clsx';
import { FeaturedBook } from "../components/FeaturedBook";
import { SocialLinks } from "../components/SocialLinks"
import { UnderConstruction } from "../components/UnderConstruction";

export const Home = () => {

  return (
    <>
      <section className="w-full py-4 flex flex-col items-center overflow-hidden">
        <h1 className={clsx(
          "w-full text-center uppercase font-fredoka leading-none tracking-tight",
          "text-[clamp(2rem,11vw,12rem)] md:text-[clamp(5rem,10vw,11rem)]",
          "text-transparent bg-clip-text bg-linear-to-b from-slate-900 to-slate-600",
          "selection:bg-indigo-100 selection:text-indigo-900",
        )}>
          Janice Greve
        </h1>

        <p className="mt-4 text-slate-500 uppercase tracking-[0.5em] text-sm md:text-base">
          Indie Author & Storyteller
        </p>
      </section>

      <div className="pt-4">
        <SocialLinks size={16} />
      </div>

      <div>
        <FeaturedBook />
      </div>

      <UnderConstruction />
    </>
  )
}
