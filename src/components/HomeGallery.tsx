import React, { useEffect, useState } from 'react';
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "./ui/hero-gallery-scroll-animation"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";
import '../styles/homeComponents.css';

const IMAGES = [
  'images/homeGallery/F1.jpg',
  'images/homeGallery/F2.jpg',
  'images/homeGallery/F3.jpg',
  'images/homeGallery/F4.jpg',
  'images/homeGallery/F5.jpg'
  
]

const HomeGallery = () => {
  const [showText, setShowText] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let triggerPoint;

      if (screenWidth < 768) {
        triggerPoint = windowHeight * 3.8;
      } else {
        // For larger screens
        triggerPoint = windowHeight * 3.2;
      }

      if (scrollPosition > triggerPoint) {
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
                <Button onClick={() => router.push('/contact')} className="px-4 py-2 font-medium contact-btn">
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