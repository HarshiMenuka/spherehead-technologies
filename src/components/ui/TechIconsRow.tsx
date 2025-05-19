import { TechIcon } from './TechIcon';
import { type TechIcon as TechIconType } from '../../data/techIcons';

interface TechIconsRowProps {
  icons: TechIconType[];
}

// Helper function to trim empty icons from start and end only
function trimEmptyEdges(icons: TechIconType[]): TechIconType[] {
  let start = 0;
  let end = icons.length - 1;

  while (start <= end && (!icons[start].src || !icons[start].alt)) {
    start++;
  }

  while (end >= start && (!icons[end].src || !icons[end].alt)) {
    end--;
  }

  return icons.slice(start, end + 1);
}

export const TechIconsRow = ({ icons }: TechIconsRowProps) => {
  const trimmedIcons = trimEmptyEdges(icons);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-1 md:gap-4 w-full">
      {/* Desktop view - show all icons */}
      <div className="hidden md:flex flex-wrap justify-center gap-2 sm:gap-1 md:gap-4 w-full">
        {icons.map((icon, index) => (
          <TechIcon
            key={`${icon.alt || 'empty'}-${index}`}
            src={icon.src}
            alt={icon.alt}
            shadowColor={icon.shadowColor}
          />
        ))}
      </div>

      {/* Tablet & Mobile view - hide only leading/trailing empty icons */}
      <div className="md:hidden grid grid-cols-4 gap-2 w-full">
        {trimmedIcons.map((icon, index) => (
          <TechIcon
            key={`${icon.alt || 'empty'}-${index}`}
            src={icon.src}
            alt={icon.alt}
            shadowColor={icon.shadowColor}
          />
        ))}
      </div>
    </div>
  );
};
