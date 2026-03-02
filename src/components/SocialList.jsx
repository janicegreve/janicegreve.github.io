import { socialLinks } from '../constants/socials';
import { SocialIcon } from './SocialIcon';

export const SocialList = () => {
  return (
    <ul className="space-y-4">
      {socialLinks.map((social) => {
        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <SocialIcon
                iconKey={social.iconKey}
                size={24}
                color="default" // Using 'default' applies the brand's official hex color
                className="opacity-80 group-hover:opacity-100"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm uppercase tracking-wider">{social.name}</span>
                <span className="text-xs text-slate-400">{social.label}</span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
