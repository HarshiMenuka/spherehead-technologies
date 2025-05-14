"use client"
import Spline from '@splinetool/react-spline';
import Nav from '../components/nav';
import Footer from '../components/footer';
import JoinUsSection from '../components/joinus';

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        .home-container {
          width: 100vw;
          height: 100dvh;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .spline-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .spline-wrapper canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
        }

        .text-section {
        margin-top: 100px;
          position: absolute;
          color: #fff;
          top: 0;
          width: 100%;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
        }

        .heading {
          font-size: 56px;
          margin-bottom: 10px;
          font-weight: 400;
          line-height: 1.2;
          margin-top: 100px;
        }

        .subheading {
          font-size: 18px;
          margin: 0 auto;
          font-weight: 400;
          max-width: 800px;
        }

        .test-section {
        
          height: 1500px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 600;
          color: #333;
          position: relative;
          z-index: 5;
        }
      `}</style>

      <div className="home-container">
        <div className="spline-wrapper">
          <Spline scene="https://prod.spline.design/2BYPhGAm9V-fx62e/scene.splinecode" />
        </div>

        <div className="text-section">
          <Nav />
          <h1 className="heading">Whole Sphere of tech <br />satisfying all your needs</h1>
          <h2 className="subheading">
            Get the most reliable tech solutions, customized to your requirements built on trust without <br />paying a hefty price tag
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
        <JoinUsSection />
        <Footer />
    </>
    
  );
}
