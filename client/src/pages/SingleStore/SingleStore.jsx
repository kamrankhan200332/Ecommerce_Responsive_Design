import React from "react";
import Hero from "../../components/SingleStoreComponent/Hero";
import SingleProduct from "../../components/SingleStoreComponent/SingleProduct";
import Slider from "../../utills/Splide/Slider";
import DesReviewNavbar from "../../components/SingleStoreComponent/DesReviewNavbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const SingleStore = () => {
  return (
    <div className="px-[70px] space-y-10">
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
