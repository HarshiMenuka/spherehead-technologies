import React, { useEffect, useState } from 'react';
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "./ui/hero-gallery-scroll-animation"
import { Button } from "./ui/button"

const IMAGES = [
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww",
]

const HomeGallery = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollPosition > windowHeight * 3.2) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <ContainerScroll className="h-[350vh] bg-[#121212]">
        <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
          {IMAGES.map((imageUrl, index) => (
            <BentoCell
              key={index}
              className="overflow-hidden rounded-xl shadow-xl"
            >
              <img
                className="size-full object-cover object-center"
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
              />
            </BentoCell>
          ))}
        </BentoGrid>

        <div className={`sticky top-0 left-0 z-10 h-screen w-full ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <ContainerScale className="flex h-full items-center justify-center">
            <div className="max-w-2xl px-4 text-center">
              <h1 className="pt-18 text-4xl font-bold tracking-tighter text-white md:text-6xl">
                Our Portfolio speaks for itself
              </h1>
              <p className="mx-auto my-6 max-w-xl text-sm text-gray-300 md:text-base">
                We turn your business idea into a website or web application that not only looks good, but is also intuitive and easy to use
              </p>
              <div className="flex items-center justify-center gap-4 w-full">
                <Button className="bg-white px-4 py-2 font-medium text-black hover:bg-gray-200">
                  Get Started
                </Button>
              </div>

            </div>
          </ContainerScale>
        </div>
      </ContainerScroll>
    </div>
  )
}

export { HomeGallery } 