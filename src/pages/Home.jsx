import { useParams } from 'react-router';
import clsx from 'clsx';
import { FeaturedBook } from "../components/FeaturedBook";
import { SocialLinks } from "../components/SocialLinks"
import { UnderConstruction } from "../components/UnderConstruction";
import { useTranslation } from 'react-i18next';
import { FunkySection } from '../components/FunkySection';
import { Mailbox } from 'lucide-react';

export const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="overflow-hidden">
      <section className="w-full py-4 flex flex-col items-center">
        <h1 className={clsx(
          "w-full text-center uppercase font-fredoka leading-none tracking-tight",
          "text-[clamp(2rem,11vw,12rem)] md:text-[clamp(5rem,10vw,11rem)]",
          "text-transparent bg-clip-text bg-linear-to-b from-slate-900 to-slate-600",
          "selection:bg-indigo-100 selection:text-indigo-900",
        )}>
          Janice Greve
        </h1>

        <p className="text-center mt-4 text-slate-500 uppercase tracking-[0.5em] text-sm md:text-base">
          {t('home.authorDescription')}
        </p>
      </section>

      <div className="pt-4 pb-30">
        <SocialLinks size={16} />
      </div>

      <FunkySection
        title={t('home.aboutTitle')}
        text={t('home.aboutText')}
        linkTo={`/${lang}/about`}
        linkText={t('home.aboutLink')}
        bgColor="bg-gradient-to-r from-indigo-50 to-indigo-300"
        slant="down"
      >
        <img src="/janicegrevedoodle.webp" className="w-48 rotate-6 rounded-3xl hover:-rotate-6 transition-transform" alt="Sketch" />
      </FunkySection>

      <FunkySection
        title={t('home.booksTitle')}
        text={t('home.booksText')}
        linkTo={`/${lang}/books`}
        linkText={t('home.booksLink')}
        bgColor="bg-gradient-to-r from-sky-300 to-sky-50"
        slant="up"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-200 rounded-lg rotate-6 -z-10 group-hover:rotate-12 transition-transform" />
          <img src="/covers/ava-jones.webp" className="w-56 shadow-xl" alt="Books" />
        </div>
      </FunkySection>

      <FunkySection
        title={t('home.blogTitle')}
        text={t('home.blogText')}
        linkTo={`/${lang}/blog`}
        linkText={t('home.blogLink')}
        bgColor="bg-gradient-to-r from-zinc-50 to-zinc-300"
        slant="down"
      >
        <div className="text-white font-emilys-candy text-4xl border-4 border-indigo-400 p-8 -rotate-6 transition-transform hover:scale-125 hover:rotate-6">
          Latest Notes
        </div>
      </FunkySection>

      <FunkySection
        title={t('home.newsletterTitle')}
        text={t('home.newsletterText')}
        linkTo={`/${lang}/newsletter`}
        linkText={t('home.newsletterLink')}
        bgColor="bg-gradient-to-r from-amber-300 to-amber-50"
        slant="none"
      >
        <div className="p-4 bg-amber-400 rounded-3xl rotate-2 transition-transform hover:perspective-dramatic">
           {/* <Mailbox className="transition-transform hover:transition-[color]-white" size={150} color="black" fill="white" /> */}
          <Mailbox 
            size={150} 
            className="transition-colors duration-1000 text-black fill-white hover:text-white hover:fill-black" 
          />
        </div>
      </FunkySection>

      <div>
        <FeaturedBook bookId={'ava-jones'} />
      </div>

      <UnderConstruction />
    </div>
  )
}
