import { FeaturedBook } from "../components/FeaturedBook";
import SocialLinks from "../components/SocialLinks"
import clsx from 'clsx';

export const Home = () => {

  return (
    <>
      <section className="w-full py-4 flex flex-col items-center overflow-hidden">
        <h1 className={clsx(
          "w-full text-center uppercase font-fredoka leading-none tracking-tighter",
          "text-[clamp(2rem,12vw,12rem)] md:text-[clamp(5rem,10vw,12rem)]",
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
      <div className="font-sans flex items-center justify-center m-0 mt-20">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-sm mx-4">
          <div className="text-5xl mb-4">🚧</div>
          <h1 className="text-[#333] text-2xl font-bold mb-2">Under Construction</h1>
          <p className="text-[#666] leading-relaxed">Our website is currently undergoing scheduled maintenance.<br/>We'll be back online soon!</p>
        </div>
      </div>
    </>
  )
}
