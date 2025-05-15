import React from "react";
import SectionHeader from "../sectionheader";
const techIcons = [


  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/angular.svg", alt: "Angular", shadowColor: "rgba(255, 0, 0, 0.7)" },
  { src: "/images/tech-icons/react.svg", alt: "React", shadowColor: "rgba(97, 218, 251, 0.7)" },
  { src: "/images/tech-icons/vue.svg", alt: "Vue", shadowColor: "rgba(65, 184, 131, 0.7)" },
  { src: "/images/tech-icons/node-js.svg", alt: "Node.js", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/php.svg", alt: "PHP", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/next.svg", alt: "Next.js", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/ex.svg", alt: "Ex", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/aws.svg", alt: "AWS", shadowColor: "rgba(97, 218, 251, 0.7)" },
  { src: "/images/tech-icons/python.svg", alt: "Python", shadowColor: "rgba(65, 184, 131, 0.7)" },
  { src: "/images/tech-icons/flutter.svg", alt: "Flutter", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/firebase.svg", alt: "Firebase", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/cobit.svg", alt: "COBIT", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/mongodb.svg", alt: "Mongo DB", shadowColor: "rgba(255, 0, 0, 0.7)" },
  { src: "/images/tech-icons/joomla.svg", alt: "Joomla", shadowColor: "rgba(97, 218, 251, 0.7)" },
  { src: "/images/tech-icons/mysql.svg", alt: "MySQL", shadowColor: "rgba(65, 184, 131, 0.7)" },
  { src: "/images/tech-icons/nist.svg", alt: "N IST", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/ai.svg", alt: "Adobe Illustrator", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/shopify.svg", alt: "Shopify", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/googlecloud.svg", alt: "G-Cloud", shadowColor: "rgba(255, 0, 0, 0.7)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/wordpress.svg", alt: "Wordpress", shadowColor: "rgba(97, 218, 251, 0.7)" },
  { src: "/images/tech-icons/Java.svg", alt: "Java", shadowColor: "rgba(65, 184, 131, 0.7)" },
  { src: "/images/tech-icons/swift.svg", alt: "SWIFT", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/Figma.svg", alt: "Figma", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/DigitalOcean.svg", alt: "Digital Ocean", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/docker.svg", alt: "Docker", shadowColor: "rgba(255, 255, 255, 0.3)" },
  { src: "/images/tech-icons/Azure.svg", alt: "Azure", shadowColor: "rgba(139, 195, 74, 0.7)" },
  { src: "/images/tech-icons/cloudfare.svg", alt: "CloudFare", shadowColor: "rgba(104, 109, 224, 0.7)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },
  { src: "/images/tech-icons/blankimage.svg", alt: "", shadowColor: "rgba(255, 0, 0, 0)" },


];

const TechStack = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      textAlign: "center",
      padding: "2rem",
      backgroundColor: "#111",
      color: "white",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "0.5rem",
    },
    subHeading: {
      fontSize: "1.0rem",
      color: "#629DC7",
      marginBottom: "1rem",
    },
    paragraph: {
      maxWidth: "550px",
      margin: "0 auto",
      fontWeight: "light",
      marginBottom: "2rem",
      fontSize: "0.8rem",
    },
    iconContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem",
    },
    iconBox: {
      backgroundColor: "#2d3748",
      padding: "1rem",
      borderRadius: "0.5rem",
      transition: "box-shadow 0.3s ease",
    },
    icon: {
      height: "2rem",
      width: "2rem",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.container}>
      <section className="bg-[#111] pt-[72px]">
              <SectionHeader
                overline="Tech Stack"
                title="Powering Innovation with the Best Tools"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </section>


      <div style={styles.iconContainer}>
        <div className="space-y-4">

          {/* Row 1: 10 icons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-1 md:gap-4">
            {techIcons.slice(0, 13).map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#151515] bg-opacity-20 p-2 sm:p-2.5 md:p-3 rounded-md transition-shadow duration-300"
                style={{
                  width: "75px",
                  height: "75px",
                  boxShadow: `0 0 8px rgba(0, 0, 0, 0)`,
                  border: "1px solid rgba(135, 135, 135,0.1)",
                  borderRadius: "0.5rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 12px ${icon.shadowColor}`)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 8px rgba(0, 0, 0, 0)`)
                }
              >
                <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
              </div>
            ))}
          </div>


          {/* Row 1: 10 icons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-1 md:gap-4">
            {techIcons.slice(13, 27).map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#151515] bg-opacity-20 p-2 sm:p-2.5 md:p-3 rounded-md transition-shadow duration-300"
                style={{
                  width: "75px",
                  height: "75px",
                  boxShadow: `0 0 8px rgba(0, 0, 0, 0)`,
                  border: "1px solid rgba(135, 135, 135,0.1)",
                  borderRadius: "0.5rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 12px ${icon.shadowColor}`)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 8px rgba(0, 0, 0, 0)`)
                }
              >
                <img src={icon.src} alt={icon.alt} className="h-8 w-8" />
              </div>
            ))}
          </div>

          {/* Row 2: 9 icons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {techIcons.slice(27, 40).map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#151515] bg-opacity-20 p-2 sm:p-2.5 md:p-3 rounded-md transition-shadow duration-300"
                style={{
                  width: "75px",
                  height: "75px",
                  boxShadow: `0 0 8px rgba(0, 0, 0, 0)`,
                  border: "1px solid rgba(135, 135, 135,0.1)",
                  borderRadius: "0.5rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 12px ${icon.shadowColor}`)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 8px rgba(0, 0, 0, 0)`)
                }
              >
                <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
              </div>
            ))}
          </div>

          {/* Row 3: 8 icons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {techIcons.slice(40, 54).map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#151515] bg-opacity-20 p-2 sm:p-2.5 md:p-3 rounded-md transition-shadow duration-300"
                style={{
                  width: "75px",
                  height: "75px",
                  boxShadow: `0 0 8px rgba(0, 0, 0, 0)`,
                  border: "1px solid rgba(135, 135, 135,0.1)",
                  borderRadius: "0.5rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 12px ${icon.shadowColor}`)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 8px rgba(0, 0, 0, 0)`)
                }
              >
                <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {techIcons.slice(54, 67).map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#151515] bg-opacity-20 p-2 sm:p-2.5 md:p-3 rounded-md transition-shadow duration-300"
                style={{
                  width: "75px",
                  height: "75px",
                  boxShadow: `0 0 8px rgba(0, 0, 0, 0)`,
                  border: "1px solid rgba(135, 135, 135,0.1)",
                  borderRadius: "0.5rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 12px ${icon.shadowColor}`)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 8px rgba(0, 0, 0, 0)`)
                }
              >
                <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
              </div>
            ))}
          </div>
        </div>

      </div>






    </div>
  );
};

export default TechStack;
