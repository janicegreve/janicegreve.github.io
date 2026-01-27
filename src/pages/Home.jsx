import SocialLinks from "../components/SocialLinks"

export const Home = () => {

  return (
    <>
      <section className="w-full py-4 flex flex-col items-center overflow-hidden">
        {/* 
          - leading-none: removes extra space above/below letters 
          - tracking-tighter: creates that modern editorial "compact" look
          - whitespace-nowrap: prevents the name from breaking into two lines
        */}
        <h1 className="
          w-full text-center uppercase font-serif font-bold leading-none tracking-tighter
          text-[12vw] lg:text-[14vw] 
          text-slate-900 selection:bg-indigo-100
        ">
          Janice Greve
        </h1>

        <p className="mt-4 text-slate-500 uppercase tracking-[0.5em] text-sm md:text-base">
          Indie Author & Storyteller
        </p>
      </section>

      <div className="pt-4">
        <SocialLinks size={16} />
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
