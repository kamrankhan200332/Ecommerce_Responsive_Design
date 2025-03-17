import React from "react";
import Slider from "../../utills/Swiper/Slider";
import Page from "../Page/Page";
import AfterHero from "../../components/AfterHero/AfterHero";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import AfterFeaturedProd from "../../components/AfterFeaturedProd/AfterFeaturedProd";
import ImageSection from "../../components/ImageSection/ImageSection";
import DailyDeal from "../../components/DailyDeal/DailyDeal";
import AfterDailyDeal from "../../components/AfterDailyDeal/AfterDailyDeal";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px] mb-20">
        <div className="hero borderr">
          <Slider />
        </div>
        <div className="afterHero">
          <AfterHero />
        </div>
        <div className="featureProduct borderr">
          <FeaturedProduct />
        </div>
        <div className="afterFeaturedProd borderr">
          <AfterFeaturedProd />
        </div>
        <div className="imageSection">
          <ImageSection />
        </div>
        <div className="dailyDeal">
          <DailyDeal />
        </div>
        <div>
          <AfterDailyDeal />
        </div>
        <div>
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Home;
