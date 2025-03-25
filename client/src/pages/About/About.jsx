import React from "react";
import Hero from "../../components/AboutComponent/Hero";
import AfterHero from "../../components/AboutComponent/AfterHero";
import StaffInfo from "../../components/AboutComponent/StaffInfo";
import AfterStaffInfo from "../../components/AboutComponent/AfterStaffInfo";
import Delivery from "../../components/AboutComponent/Delivery";
import Team from "../../components/AboutComponent/Team";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

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
      <div>
        <AfterStaffInfo />
      </div>
      <div>
        <Delivery />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default About;
