import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";

const Services = () => {
  const statements = {
    therapy: "Empowering individuals to navigate life's challenges and discover their inner strength through compassionate therapy sessions.",
    self_improvement: "Unlock your full potential and cultivate personal growth with tailored strategies and practical tools for self-improvement.",
    health_services: "Comprehensive health services designed to optimize your physical, mental, and emotional well-being, promoting a balanced and fulfilling lifestyle."
  };
  



  const icon1 = (
    <RiPsychotherapyFill size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdOutlineSelfImprovement size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Therapy" about={statements.therapy}/>
        <ServicesCard icon={icon2} title="Self Imrovement" about={statements.self_improvement} />
        <ServicesCard icon={icon3} title="Health" about={statements.health_services} />
      </div>
    </div>
  );
};

export default Services;
