import { socialLinks } from '../constants/socials';
import { SocialIcon } from './SocialIcon';

// Using 'default' applies the brand's official hex color
export const SocialLinks = ({ size = 24, iconColor = 'default' }) => {
  return (
    <div className="flex items-center justify-center gap-6 w-full">
      {socialLinks.map((social) => {
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-200 hover:scale-110"
            aria-label={social.name}
          >
            <SocialIcon
              iconKey={social.iconKey}
              size={size}
              color={iconColor}
              className="transition-opacity duration-200 group-hover:opacity-80"
            />
          </a>
        );
      })}
    </div>
  );
}
