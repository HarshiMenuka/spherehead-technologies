import { TechIcon } from './TechIcon';
import { type TechIcon as TechIconType } from '../../data/techIcons';

interface TechIconsRowProps {
  icons: TechIconType[];
}

export const TechIconsRow = ({ icons }: TechIconsRowProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-1 md:gap-4 w-full">
      {icons.map((icon, index) => (
        <TechIcon
          key={`${icon.alt}-${index}`}
          src={icon.src}
          alt={icon.alt}
          shadowColor={icon.shadowColor}
        />
      ))}
    </div>
  );
}; 