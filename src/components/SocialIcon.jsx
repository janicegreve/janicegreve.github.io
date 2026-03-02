import {
  SiTiktok,
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiGoodreads,
} from '@icons-pack/react-simple-icons';

const iconMap = {
  tiktok: SiTiktok,
  instagram: SiInstagram,
  facebook: SiFacebook,
  youtube: SiYoutube,
  goodreads: SiGoodreads,
};

export const SocialIcon = ({ iconKey, ...props }) => {
  const IconComponent = iconMap[iconKey];
  return IconComponent ? <IconComponent {...props} /> : null;
};
