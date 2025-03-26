import React from "react";
import Hero from "../../components/BlogComponent/Hero";
import AfterHero from "../../components/BlogComponent/AfterHero";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Blog = () => {
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>
      <div>
        <AfterHero />
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default Blog;
