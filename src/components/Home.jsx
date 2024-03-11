import React from "react";
import { useEffect } from "react";
import "./home.css"
const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const target = document.getElementById('main1');
      if (target) {
        const xValue = 'center';
        const parallaxFactor = 0.6; // Parallax effect factor
        const slowScrollFactor = 0.2; // Slower scrolling factor
        const parallaxYValue = scrollPosition * parallaxFactor;
        const slowScrollYValue = scrollPosition * slowScrollFactor;
        target.style.backgroundPosition = `${xValue} calc(${parallaxYValue}px - ${slowScrollYValue}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmountho
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="body">
      <div className=" flex flex-col justify-center schedule">
        <h1 className=" font-semibold text-[40px] lg:text-[60px]"> Schedule </h1>
        <h1 className=" font-semibold text-[40px] lg:text-[60px]"> Appointment </h1>
        <p className="lg:text-[18px]  text-[15px]"> Schedule a consultation with our experienced doctors. Get your blood tests done at home</p>
        <button className="lg:text-18px text-[15px]"> Schedule Now &gt;</button>
      </div>
      <div id="main1"></div>
      <div className='lol'></div>
    </div>);
};

export default Home;
