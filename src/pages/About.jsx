import { useTranslation } from 'react-i18next';
import { SocialList } from "../components/SocialList";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* LEFT: Author Image (Sticky on Desktop) */}
        <div className="md:col-span-5 md:sticky md:top-24">
          <div className="relative">
            {/* The "Thematic Blur" background effect we discussed */}
            <div className="absolute -inset-4 bg-indigo-50 rounded-2xl -z-10 rotate-3 opacity-50" />
            <img 
              src="/janicegreve.webp" 
              alt="Author Name" 
              className="w-full aspect-4/5 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="mt-8 hidden md:block">
            <h3 className="text-2xl mb-4">
              {t('about.connect')}
            </h3>
            <SocialList />
          </div>
        </div>

        {/* RIGHT: Bio Content */}
        <div className="md:col-span-7 space-y-8">
          <header>
            <h1 className="text-center text-5xl text-slate-900">
              {t('about.author')}
            </h1>
            <p className="text-center text-indigo-600 font-fredoka uppercase tracking-widest mt-2">
              {t('about.title')}
            </p>
          </header>

          <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed text-justify">
            <p>
              {t('about.p1')}
            </p>
            <p className="indent-6">
              {t('about.p2')}
            </p>
          </div>

          {/* Socials again for Mobile View */}
          <div className="md:hidden pt-8">
            <h3 className="text-2xl mb-6">
              {t('about.connect')}
            </h3>
            <SocialList />
          </div>
        </div>
      </div>
    </div>
  );
}
