import { TechIcon } from './TechIcon';
import { type TechIcon as TechIconType } from '../../data/techIcons';

interface TechIconsRowProps {
  icons: TechIconType[];
}

export const TechIconsRow = ({ icons }: TechIconsRowProps) => {
  // Filter out empty icons for mobile view
  const visibleIcons = icons.filter(icon => icon.alt !== "");

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-1 md:gap-4 w-full">
      {/* Desktop view - show all icons including empty ones */}
      <div className="hidden md:flex flex-wrap justify-center gap-2 sm:gap-1 md:gap-4 w-full">
        {icons.map((icon, index) => (
          <TechIcon
            key={`${icon.alt}-${index}`}
            src={icon.src}
            alt={icon.alt}
            shadowColor={icon.shadowColor}
          />
        ))}
      </div>
      {/* Mobile view - show only non-empty icons in 4-column grid */}
      <div className="md:hidden grid grid-cols-4 gap-2 w-full">
        {visibleIcons.map((icon, index) => (
          <TechIcon
            key={`${icon.alt}-${index}`}
            src={icon.src}
            alt={icon.alt}
            shadowColor={icon.shadowColor}
          />
        ))}
      </div>
    </div>
  );
}; 