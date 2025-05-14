"use client"
import Spline from '@splinetool/react-spline';
import Nav from '../components/nav';
import Footer from '../components/footer';
import JoinUsSection from '../components/joinus';
import Countiescart from '../components/Countiescart';
import Testimoinals from '../components/testimonials';
import './page.css';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="spline-wrapper">
          {/* <Spline scene="https://prod.spline.design/2BYPhGAm9V-fx62e/scene.splinecode" /> */}
        </div>

        <div className="text-section">
          <Nav />
          <h1 className="heading">Whole Sphere of tech <br />satisfying all your needs</h1>
          <h2 className="subheading">
            Get the most reliable tech solutions, customized to your requirements built on trust without paying a hefty price tag
          </h2>
        </div>

        <section className="test-section">
          <h1>test</h1>
        </section>
        <section className="test-section">
          <h1>test</h1>
        </section>
        <section className="test-section">
          <h1>test</h1>
        </section>

      </div>
      <Testimoinals/>
        <JoinUsSection />
            <Countiescart />
            
        <Footer />
    </>
    
  );
}
