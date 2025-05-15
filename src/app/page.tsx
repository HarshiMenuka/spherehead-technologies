"use client"
import JoinUsSection from '../components/Joinus';
import Spline from '@splinetool/react-spline';
import TechStack from "../components/ui/tech-stack";
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo';
import { CountiesCart } from '@/components/CountiesCart';
import { HomeGallery } from '@/components/HomeGallery';
import Testimoinals from '../components/Testimonials';
import SectionHeader from '../components/sectionheader';
import './page.css';

export default function Home() {
  return (
    <>
       <div className="relative w-full h-[100vh]">
    {/* Spline background */}
    <div className="absolute inset-0 z-0">
      <Spline scene="https://prod.spline.design/2BYPhGAm9V-fx62e/scene.splinecode" />
    </div>

    {/* SectionHeader overlayed on top */}
    <section className="relative z-10 pt-[150px] text-center bg-transparent">
      <SectionHeader
        overline=""
        title="We Create Solution for Your Business"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </section>
  </div>
      <AppleCardsCarouselDemo />
      <HomeGallery/>
      <TechStack />
      <CountiesCart />
      <Testimoinals />
      <JoinUsSection />
    </>

  );
}
