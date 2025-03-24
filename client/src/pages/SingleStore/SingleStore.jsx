import React from "react";
import Hero from "../../components/SingleStoreComponent/Hero";
import SingleProduct from "../../components/SingleStoreComponent/SingleProduct";
import Slider from "../../utills/Splide/Slider";
import DesReviewNavbar from "../../components/SingleStoreComponent/DesReviewNavbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const SingleStore = () => {
  return (
    <div className="px-[70px]k space-y-10k space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>
      <div>
        <SingleProduct />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <DesReviewNavbar />
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default SingleStore;
