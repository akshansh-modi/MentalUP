import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Coach.css";

const Coach = () => {
 
   const data = [
    {
      img: "/img/doc1.png",
      name: "Serena Mitchell",
      // remark: "Great",
      about:
        "Specializes in cognitive behavioral therapy for anxiety and depression.",
    },
    {
      img: "/img/doc2.png",
      name: "Julian Bennett",
      // remark: "Great",
      about:
        "Licensed clinical psychologist specializing in stress management and mindfulness.",
    },
    {
      img: "/img/doc3.png",
      name: "Camila Rodriguez",
      // remark: "Great",
      about:
        "Certified life coach focusing on holistic wellness and personal development.",
    },
    {
      img: "/img/doc4.png",
      name: "Victor Nguyen",
      // remark: "Great",
      about:
        "Licensed therapist promoting mental well-being and resilience-building.",
    },
    {
      img: "/img/doc5.png",
      name: "Ethan Carter",
      // remark: "Great",
      about:
        "Certified coach specializing in performance psychology and goal achievement.",
    },
    {
      img: "/img/doc6.png",
      name: "Olivia Martinez",
      // remark: "Great",
      about:
        "Licensed therapist experienced in mindfulness-based therapy and self-compassion practices.",
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
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          touchMove: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className=" flex flex-col justify-center lg:px-32 px-10 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Coaches
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
                  className="mx-auto h-14 w-14 object-cover rounded-full "
                  loading="lazy"

                />
              </div>

              <div className="my-auto flex flex-col justify-center items-center">
                <h1 className=" font-semibold  textg-md  pt-4 ">{e.name}</h1>
               {/* { <h3 className=" pt-2">{e.remark}</h3>} */}
                <p className="p-2 text-center text-xs ">{e.about}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Coach;
