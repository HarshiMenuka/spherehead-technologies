"use client"
import JoinUsSection from '../components/Joinus';
// import Spline from '@splinetool/react-spline';
import TechStack from "../components/ui/tech-stack";
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo';
import { CountiesCart } from '@/components/CountiesCart';
import { HomeGallery } from '@/components/HomeGallery';
import Testimoinals from '../components/Testimonials';
import './page.css';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="spline-wrapper">
          {/* <Spline scene="https://prod.spline.design/2BYPhGAm9V-fx62e/scene.splinecode" /> */}
        </div>
        <div className="text-section">
            <h1 className="heading">Whole Sphere of tech <br />satisfying all your needs</h1>
          <h2 className="subheading">
            Get the most reliable tech solutions, customized to your requirements built on trust without paying a hefty price tag
          </h2>
        </div>
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
