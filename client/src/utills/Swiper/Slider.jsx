import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <div className="h-[70vh] md:h-[80vh] lg:h-[84vh] ">
        <Swiper
          navigation={true}
          modules={[Autoplay]}
          speed={2000}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="mySwiper h-full"
          loop={true}
        >
          <SwiperSlide>
            <div className="h-full flex pt-[10px] font-bold bg-yellow-300k md:bg-green-400k lg:bg-blue-500k xl:bg-red-600k borderr">
              <div className="heroContent flex justify-center items-start flex-col gap-4 md:gap-5 h-full w-full lg:w-[50%] borderr">
                <h1 className="uppercase text-xl md:text-3xl font-semibold opacity-80 mt-10 [@media(max-width:500px)]:mt-3 [@media(max-width:559px)]">
                  Wellcome to Botanical
                </h1>
                <h1 className="font-semibold font-['Playfair_Display'] text-3xl md:text-5xl [@media(max-width:500px)]:text-2xl">
                  Houseplant <br /> The Perfect Choice.
                </h1>
                <div className="w-[200px] h-[5px] bg-black"></div>
                <p className="text-sm md:text-[17px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  tempore doloremque velit, libero repudiandae maxime, quae
                  debitis.
                </p>
                <button className="cursor-pointer p-2 md:py-3 mt-3 text-sm gap-2 font-bold md:px-5 md:text-xl md:mt-6 md:gap-x-3 text-white rounded-full bg-green-500 md:font-semibold flex items-center justify-center hover:bg-green-600 ">
                  Shop Now <FaArrowRight />
                </button>
              </div>
              <div className="heroImage borderr hidden md:block lg:w-[50%] md:w-[60%] overflow-visible [@media(max-width:990px)]:hidden">
                <img
                  className="object-cover h-full w-full"
                  src={banner1}
                  alt="banner1"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full flex pt-[10px] font-bold bg-yellow-300k md:bg-green-400k lg:bg-blue-500k xl:bg-red-600k borderr">
              <div className="heroContent flex justify-center items-start flex-col gap-4 md:gap-5 h-full w-full lg:w-[50%] borderr">
                <h1 className="uppercase text-xl md:text-3xl font-semibold opacity-80 mt-10 [@media(max-width:500px)]:mt-3 [@media(max-width:559px)]">
                  Wellcome to Botanical
                </h1>
                <h1 className="font-semibold font-['Playfair_Display'] text-3xl md:text-5xl [@media(max-width:500px)]:text-2xl">
                  Plants Gonna Make People Happy.
                </h1>
                <div className="w-[200px] h-[5px] bg-black"></div>
                <p className="text-sm md:text-[17px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  tempore doloremque velit, libero repudiandae maxime, quae
                  debitis.
                </p>
                <button className="cursor-pointer p-2 md:py-3 mt-3 text-sm gap-2 font-bold md:px-5 md:text-xl md:mt-6 md:gap-x-3 text-white rounded-full bg-green-500 md:font-semibold flex items-center justify-center hover:bg-green-600 ">
                  Shop Now <FaArrowRight />
                </button>
              </div>
              <div className="heroImage borderr hidden md:block lg:w-[50%] md:w-[60%] overflow-visible [@media(max-width:990px)]:hidden">
                <img
                  className="object-cover h-full w-full"
                  src={banner3}
                  alt="banner3"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full flex pt-[10px] font-bold bg-yellow-300k md:bg-green-400k lg:bg-blue-500k xl:bg-red-600k borderr">
              <div className="heroContent flex justify-center items-start flex-col gap-4 md:gap-5 h-full w-full lg:w-[50%] borderr">
                <h1 className="uppercase text-xl md:text-3xl font-semibold opacity-80 mt-10 [@media(max-width:500px)]:mt-3 [@media(max-width:559px)]">
                  Wellcome to Botanical
                </h1>
                <h1 className="font-semibold font-['Playfair_Display'] text-3xl md:text-5xl [@media(max-width:500px)]:text-2xl">
                  Plants For Healthy.
                </h1>
                <div className="w-[200px] h-[5px] bg-black"></div>
                <p className="text-sm md:text-[17px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  tempore doloremque velit, libero repudiandae maxime, quae
                  debitis.
                </p>
                <button className="cursor-pointer p-2 md:py-3 mt-3 text-sm gap-2 font-bold md:px-5 md:text-xl md:mt-6 md:gap-x-3 text-white rounded-full bg-green-500 md:font-semibold flex items-center justify-center hover:bg-green-600 ">
                  Shop Now <FaArrowRight />
                </button>
              </div>
              <div className="heroImage borderr hidden md:block lg:w-[50%] md:w-[60%] overflow-visible [@media(max-width:990px)]:hidden">
                <img
                  className="object-cover h-full w-full"
                  src={banner2}
                  alt="banner2"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;

{
  /* <SwiperSlide>
  <div className=" md:bg-blue-300 mid:h-[84vh] flex borderr pt-10">
    <div className="heroContent flex justify-center items-start flex-col gap-4 h-full w-full md:w-[50%] borderr [@media(max-width:990px)]:w-full">
      <h1 className="uppercase text-xl md:text-3xl font-semibold opacity-80 mt-10 [@media(max-width:500px)]:mt-3 [@media(max-width:559px)]">
        Wellcome to Botanical
      </h1>
      <h1 className="font-semibold text-5xl md:text-6xl [@media(max-width:500px)]:text-2xl">
        Plants Gonna Make People Happy.
      </h1>
      <div className="w-[200px] h-[5px] bg-black"></div>
      <p className="text-[17px] [@media(max-width:500px)]:text-[14px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum tempore
        doloremque velit, libero repudiandae maxime, quae debitis.
      </p>
      <button className="cursor-pointer py-3 px-5 text-white rounded-full bg-green-500 font-semibold flex items-center justify-center gap-x-3 mt-10 [@media(max-width:500px)]:mt-4 hover:bg-green-600">
        Shop Now <FaArrowRight />
      </button>
    </div>
    <div className="heroImage borderr hidden md:block md:w-[50%] [@media(max-width:990px)]:hidden">
      <img className="object-cover h-full w-full" src={banner3} alt="banner3" />
    </div>
  </div>
</SwiperSlide>; */
}
