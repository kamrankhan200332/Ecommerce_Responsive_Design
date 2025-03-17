import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const SliderSmall = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[400px] bg-red-400 flex items-center justify-between w-full">
        <Swiper
          slidesPerView={5} // Show 5 slides
          spaceBetween={50}
          loop={true}
          centeredSlides={true}
          speed={2000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Custom pagination element
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
            1280: { slidesPerView: 5, spaceBetween: 50 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-yellow-500 w-full h-[300px] flex items-center justify-center">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-500 w-full h-[300px] flex items-center justify-center">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-500 w-full h-[300px] flex items-center justify-center">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-purple-500 w-full h-[300px] flex items-center justify-center">
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-pink-500 w-full h-[300px] flex items-center justify-center">
              Slide 5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-500 w-full h-[300px] flex items-center justify-center">
              Slide 6
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-500 w-full h-[300px] flex items-center justify-center">
              Slide 7
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-teal-500 w-full h-[300px] flex items-center justify-center">
              Slide 8
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-500 w-full h-[300px] flex items-center justify-center">
              Slide 9
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom pagination dots positioned below */}
      <div className="custom-pagination mt-4 flex justify-center space-x-2"></div>
    </div>
  );
};

export default SliderSmall;
