import * as LucideIcons from 'lucide-react';

export const DynamicIcon = ({ name, color, className }) => {
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    return <LucideIcons.Book className={className} />;
  }

  return (
    <IconComponent
      color={color}
      className={className}
      strokeWidth={2.5}
    />
  );
}
