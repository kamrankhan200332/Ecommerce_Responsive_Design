import React from "react";
import Hero from "../../components/SingleStoreComponent/Hero";
import SingleProduct from "../../components/SingleStoreComponent/SingleProduct";
import Slider from "../../utills/Splide/Slider";

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
    </div>
  );
};

export default SingleStore;
