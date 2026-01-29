import { SocialList } from "../components/SocialList";

export const About = () => {
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
            <h3 className="text-2xl mb-4">Let's Connect</h3>
            <SocialList />
          </div>
        </div>

        {/* RIGHT: Bio Content */}
        <div className="md:col-span-7 space-y-8">
          <header>
            <h1 className="text-center text-5xl text-slate-900">About Janice</h1>
            <p className="text-center text-indigo-600 font-fredoka uppercase tracking-widest mt-2">
              Author & World Builder
            </p>
          </header>

          <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed text-justify">
            <p>
              Janice Greve was born in London; she is married with four adult children. Today she and her husband live in Aalborg, Denmark. Janice enjoys writing, reading, walks by the fjord, and is often on Bluesky participating in a 7th century world where she is a Viking baker with a longboat!
            </p>
            <p className="indent-6">
              Before having children Janice worked as a psychiatric nurse and drama therapist. After, she chose to do voluntary work in her children's schools telling her own stories at story time or helping children who had difficulty reading. The family moved to Denmark in 2009, where she taught English as a second language to university staff. Janice is now committed to her writing.
            </p>
          </div>

          {/* Socials again for Mobile View */}
          <div className="md:hidden pt-8 border-t border-slate-100">
            <h3 className="text-2xl mb-6">Let's Connect</h3>
            <SocialList />
          </div>
        </div>
      </div>
    </div>
  );
}
