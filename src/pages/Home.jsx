import SocialLinks from "../components/SocialLinks"

export const Home = () => {

  return (
    <>
      <SocialLinks size={16} />

      <div className="bg-[#f4f4f4] font-sans flex items-center justify-center h-screen m-0">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-sm mx-4">
          <div className="text-5xl mb-4">🚧</div>
          <h1 className="text-[#333] text-2xl font-bold mb-2">Under Construction</h1>
          <p className="text-[#666] leading-relaxed">Our website is currently undergoing scheduled maintenance.<br/>We'll be back online soon!</p>
        </div>
      </div>
    </>
  )
}
