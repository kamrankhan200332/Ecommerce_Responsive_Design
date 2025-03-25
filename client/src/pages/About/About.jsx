import React from "react";
import Hero from "../../components/AboutComponent/Hero";
import AfterHero from "../../components/AboutComponent/AfterHero";
import StaffInfo from "../../components/AboutComponent/StaffInfo";

const About = () => {
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>
      <div>
        <AfterHero />
      </div>
      <div>
        <StaffInfo />
      </div>
    </div>
  );
};

export default About;
