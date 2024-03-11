import React, { useRef, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  const data = [
    {
      img: "img/doc1.png",
      name: "Serena Mitchell",
      remark: "Great",
      comment:
        "Game-changer! Incredibly supportive coaches & helpful resources. Tremendous impact on my self-improvement journey.",
    },
    {
      img: "img/doc2.png",
      name: "Julian Bennett",
      remark: "Great",
      comment:
        "Exceeded expectations! Expert coaches who genuinely care. Significant improvements in various aspects of my life.",
    },
    {
      img: "img/doc3.png",
      name: "Camila Rodriguez",
      remark: "Great",
      comment:
        "Wonderful journey of self-discovery. Amazing coaches provide guidance & support. Goals achieved, obstacles overcome.",
    },
    {
      img: "img/doc4.png",
      name: "Victor Nguyen",
      remark: "Great",
      comment:
        "App addresses mental well-being excellently. Personalized coaching helped me develop healthier habits & cope better with stress.",
    },
    {
      img: "img/doc5.png",
      name: "Ethan Carter",
      remark: "Great",
      comment:
        "Top-notch app! Expert & empathetic coaches. Transformative experience. Like having a personal cheerleader in your pocket!",
    },
    {
      img: "img/doc6.png",
      name: "Olivia Martinez",
      remark: "Great",
      comment:
        "Serious about self-improvement? Look no further! Top-notch coaches & comprehensive resources. Transformative results!",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          // centerMode :false
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          touchMove: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className=" flex flex-col justify-center lg:px-32 px-10 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Testimonials
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Unlock Your Potential, Transform Your Mind: Empowering Mental
            Health, One Step at a Time!
          </p>
        </div>
      </div>
      <div className=" mt-5 ">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="flex card flex-col h-[320px]  md:h-[280px] text-black cursor-pointer shadow-lg hover:shadow-[2px_1px_15px_3px_rgba(0,0,0,0.1)] hover:scale-105 transition ease-out duration-700"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className="mx-auto h-14 w-14 object-cover  "
                />
              </div>

              <div className="my-auto flex flex-col justify-center items-center">
                <h1 className=" font-semibold  textg-md  pt-4 ">{e.name}</h1>
                <h3 className=" pt-2">{e.remark}</h3>
                <p className="p-2 text-center text-xs ">{e.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
