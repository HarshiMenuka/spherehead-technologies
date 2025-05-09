import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        .home-container {
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .text-section {
          position: absolute;
          color: #fff;
          top: 5%;
          z-index: 10;
          max-width: 80%;
        }

        .heading {
          font-size: 56px;
          margin-bottom: 10px;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          line-height: 1.2;
        }

        .subheading {
          font-size: 18px;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
        }
      `}</style>

      <div className="home-container">
        <div className="text-section">
          <h1 className="heading">Whole Sphere of tech <br></br>satisfying all your needs</h1>
          <h2 className="subheading">
            Get the most reliable tech solutions, customized to your requirements built on trust without <br></br>paying a hefty price tag
          </h2>
        </div>
        <Spline scene="https://prod.spline.design/2BYPhGAm9V-fx62e/scene.splinecode" />
      </div>
    </>
  );
}
