import {
  SiTiktok,
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiGoodreads,
} from '@icons-pack/react-simple-icons';

const socials = [
  { name: 'TikTok', href: 'https://www.tiktok.com/@janicegreve.author', icon: SiTiktok },
  { name: 'Instagram', href: 'https://www.instagram.com/grevejanice', icon: SiInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/Author.J.Greve', icon: SiFacebook },
  { name: 'Youtube', href: 'https://www.youtube.com/@janicegreveauthor', icon: SiYoutube },
  { name: 'Goodreads', href: 'https://www.goodreads.com/author/show/64240941.Janice_Greve', icon: SiGoodreads },
];

export default function SocialLinks({ size = 24, iconColor = 'default' }) {
  return (
    <div className="flex items-center justify-center gap-6 w-full">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            // We use 'group' so we can animate the icon on hover of the link
            className="group transition-transform duration-200 hover:scale-110"
            aria-label={social.name}
          >
            <Icon 
              size={size}
              color={iconColor} // Using 'default' applies the brand's official hex color
              className="transition-opacity duration-200 group-hover:opacity-80"
            />
          </a>
        );
      })}
    </div>
  );
}
