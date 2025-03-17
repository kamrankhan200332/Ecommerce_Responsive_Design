import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { featureImages } from "../../constants/FeaturedProduct";

const AfterDailyDeal = () => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 25 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {featureImages.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[200px]k relative overflow-hidden rounded-lg">
              <img
                src={feature.img}
                className="w-full h-[100px] object-contain rounded-lg"
                alt="Product"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AfterDailyDeal;
