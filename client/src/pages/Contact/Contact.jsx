import React from "react";
import Hero from "../../components/ContactComponent/Hero";
import AfterHero from "../../components/ContactComponent/AfterHero";
import InputSection from "../../components/ContactComponent/InputSection";

const Contact = () => {
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>
      <div>
        <AfterHero />
      </div>
      <div>
        <InputSection />
      </div>
    </div>
  );
};

export default Contact;
