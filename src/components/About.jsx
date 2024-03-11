import Testimonials from "./Testimonials";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="  flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
          <div className=" w-full lg:w-3/4 space-y-4">
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              About Us
            </h1>
            <p className=" text-justify lg:text-start">
              Welcome to MentalUP, where we&aposre passionate about supporting
              your journey towards better mental health and personal growth. Our
              team consists of dedicated professionals with diverse backgrounds
              in psychology, counseling, and technology. We&aposre committed to
              providing you with access to qualified self-improvement coaches
              who specialize in various areas of mental health.
            </p>
            <p className="text-justify lg:text-start">
              we prioritize your privacy and comfort. Our platform offers a
              confidential and supportive environment where you can explore your
              thoughts, feelings, and goals with confidence. We believe that
              everyone deserves access to high-quality mental health care, which
              is why we&aposre here to break down barriers and empower you to
              live your best life.
            </p>
            <p className="text-justify lg:text-start">
              Thank you for choosing us as your partner in self-improvement.
              We&aposre excited to support you on your journey towards greater
              well-being
            </p>
          </div>
          <div className=" w-full lg:w-3/4">
            <iframe
              src="https://www.youtube.com/embed/VCPGMjCW0is?si=UAThumH92eSGOQil&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div></div>
        <Testimonials />
      </div>
    </>
  );
};

export default About;
