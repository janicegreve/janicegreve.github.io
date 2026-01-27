import SocialLinks from "./SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 text-center">
        <SocialLinks size={16} iconColor="text-slate-500" />
        <p className="text-slate-500 text-sm tracking-widest mt-2">
          © {currentYear} Janice Greve. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
