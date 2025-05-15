export interface TechIcon {
  src: string;
  alt: string;
  shadowColor: string;
}

// Empty icon template
const emptyIcon = { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" };

// Create arrays of empty icons for spacing
const emptyIcons = (count: number) => Array(count).fill(emptyIcon);

// Row 1: Angular, React, Vue, Node, PHP, Next.js, Ex, AWS, Python, Flutter
const row1 = [
  { src: "/images/tech-icons/angular.svg", alt: "Angular", shadowColor: "rgba(255, 0, 0, 0.7)" },
  { src: "/images/tech-icons/react.svg", alt: "React", shadowColor: "rgba(97, 218, 251, 0.7)" },
  { src: "/images/tech-icons/vue.svg", alt: "Vue", shadowColor: "rgba(65, 184, 131, 0.7)" },
  { src: "/images/tech-icons/node-js.svg", alt: "Node.js", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/php.svg", alt: "PHP", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/next.svg", alt: "Next.js", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/ex.svg", alt: "Ex", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/aws.svg", alt: "AWS", shadowColor: "rgba(97, 218, 251, 0.7)" },
  { src: "/images/tech-icons/python.svg", alt: "Python", shadowColor: "rgba(65, 184, 131, 0.7)" },
  { src: "/images/tech-icons/flutter.svg", alt: "Flutter", shadowColor: "rgba(139, 195, 74, 0.7)" }
];

// Row 2: Firebase, COBIT, MongoDB, Joomla, MySQL, NIST, AI, Shopify, G-Cloud
const row2 = [
  { src: "/images/tech-icons/firebase.svg", alt: "Firebase", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/cobit.svg", alt: "COBIT", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/mongodb.svg", alt: "Mongo DB", shadowColor: "rgba(255, 0, 0, 0.7)" },
  { src: "/images/tech-icons/joomla.svg", alt: "Joomla", shadowColor: "rgba(97, 218, 251, 0.7)" },
  { src: "/images/tech-icons/mysql.svg", alt: "MySQL", shadowColor: "rgba(65, 184, 131, 0.7)" },
  { src: "/images/tech-icons/nist.svg", alt: "N IST", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/ai.svg", alt: "Adobe Illustrator", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/shopify.svg", alt: "Shopify", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/googlecloud.svg", alt: "G-Cloud", shadowColor: "rgba(255, 0, 0, 0.7)" }
];

// Row 3: WordPress, Java, Swift, Figma, Docker, Digital Ocean, Azure, Cloudflare
const row3 = [
  { src: "/images/tech-icons/wordpress.svg", alt: "Wordpress", shadowColor: "rgba(97, 218, 251, 0.7)" },
  { src: "/images/tech-icons/Java.svg", alt: "Java", shadowColor: "rgba(65, 184, 131, 0.7)" },
  { src: "/images/tech-icons/swift.svg", alt: "SWIFT", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/Figma.svg", alt: "Figma", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/docker.svg", alt: "Docker", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/DigitalOcean.svg", alt: "Digital Ocean", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/Azure.svg", alt: "Azure", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/cloudfare.svg", alt: "CloudFare", shadowColor: "rgba(104, 109, 224, 0.7)" }
];

// Construct the full array with proper spacing
export const techIcons: TechIcon[] = [
  ...emptyIcons(13), // Top row
  ...emptyIcons(1), ...emptyIcons(1), ...row1.slice(0, 10), ...emptyIcons(1), // First row with empty squares between
  ...emptyIcons(1), ...emptyIcons(1), ...row2.slice(0, 9), ...emptyIcons(3), // Second row with empty squares between
  ...emptyIcons(1), ...emptyIcons(1), ...row3.slice(0, 8), ...emptyIcons(4), // Third row with empty squares between
  ...emptyIcons(13), // Bottom row
]; 