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
  { src: "/images/tech-icons/angular.svg", alt: "Angular", shadowColor: "#c3002f" },
  { src: "/images/tech-icons/react.svg", alt: "React", shadowColor: "#61dafb" },
  { src: "/images/tech-icons/vue.svg", alt: "Vue", shadowColor: "#34495e" },
  { src: "/images/tech-icons/node-js.svg", alt: "Node.js", shadowColor: "#6ca45e" },
  { src: "/images/tech-icons/php.svg", alt: "PHP", shadowColor: "#777bb3" },
  { src: "/images/tech-icons/next.svg", alt: "Next.js", shadowColor: "#f3f3f3" },
  { src: "/images/tech-icons/ex.svg", alt: "Ex", shadowColor: "#ffffff" },
  { src: "/images/tech-icons/aws.svg", alt: "AWS", shadowColor: "#70480d" },
  { src: "/images/tech-icons/python.svg", alt: "Python", shadowColor: "#3975a5" },
  { src: "/images/tech-icons/flutter.svg", alt: "Flutter", shadowColor: "#47c5fb" }
];

// Row 2: Firebase, COBIT, MongoDB, Joomla, MySQL, NIST, AI, Shopify, G-Cloud
const row2 = [
  { src: "/images/tech-icons/firebase.svg", alt: "Firebase", shadowColor: "#ffc400" },
  { src: "/images/tech-icons/cobit.svg", alt: "COBIT", shadowColor: "#c97b94" },
  { src: "/images/tech-icons/mongodb.svg", alt: "Mongo DB", shadowColor: "#6cac48" },
  { src: "/images/tech-icons/joomla.svg", alt: "Joomla", shadowColor: "#f9ae41" },
  { src: "/images/tech-icons/mysql.svg", alt: "MySQL", shadowColor: "#54798f" },
  { src: "/images/tech-icons/nist.svg", alt: "N IST", shadowColor: "#ffffff" },
  { src: "/images/tech-icons/Ai.svg", alt: "Adobe Illustrator", shadowColor: "#803a00" },
  { src: "/images/tech-icons/shopify.svg", alt: "Shopify", shadowColor: "#95bf47" },
  { src: "/images/tech-icons/googlecloud.svg", alt: "G-Cloud", shadowColor: "#4285f4" }
];

// Row 3: WordPress, Java, Swift, Figma, Docker, Digital Ocean, Azure, Cloudflare
const row3 = [
  { src: "/images/tech-icons/wordpress.svg", alt: "Wordpress", shadowColor: "#21759b" },
  { src: "/images/tech-icons/Java.svg", alt: "Java", shadowColor: "#4e7896" },
  { src: "/images/tech-icons/swift.svg", alt: "SWIFT", shadowColor: "#fb4b29" },
  { src: "/images/tech-icons/Figma.svg", alt: "Figma", shadowColor: "#ff7262" },
  { src: "/images/tech-icons/docker.svg", alt: "Docker", shadowColor: "#2396ed" },
  { src: "/images/tech-icons/DIgitalOcean.svg", alt: "Digital Ocean", shadowColor: "#0069ff" },
  { src: "/images/tech-icons/Azure.svg", alt: "Azure", shadowColor: "#36baee" },
  { src: "/images/tech-icons/cloudfare.svg", alt: "CloudFare", shadowColor: "#f38020" }
];

// Construct the full array with proper spacing
export const techIcons: TechIcon[] = [
  ...emptyIcons(13), // Top row
  ...emptyIcons(1),  ...row1.slice(0, 10), ...emptyIcons(1), // First row with empty squares between
  ...emptyIcons(1), ...emptyIcons(1), ...row2.slice(0, 9), ...emptyIcons(3), // Second row with empty squares between
  ...emptyIcons(1), ...emptyIcons(1), ...row3.slice(0, 8), ...emptyIcons(4), // Third row with empty squares between
  ...emptyIcons(13), // Bottom row
]; 