import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin, PiEyeLight } from "react-icons/pi";
import { LuArrowRightLeft } from "react-icons/lu";
import {FeaturedProductData} from "../../constants/FeaturedProduct";

const SliderSmall = () => {
  const [hoverToShowProdIcon, setHoverToShowProdIcon] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <div className="h-[400px] flex items-center justify-between w-full">
        <Swiper
          slidesPerView={5}
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
            el: ".custom-pagination",
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
          {FeaturedProductData.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="box w-full border border-gray-300 p-4 rounded-lg shadow-lg">
                <div
                  className="img w-full relative overflow-hidden"
                  onMouseEnter={() => setHoverToShowProdIcon(index)}
                  onMouseLeave={() => setHoverToShowProdIcon(null)}
                >
                  <img
                    src={feature.img}
                    className="w-full h-full object-cover"
                    alt="Product"
                  />

                  {/* SALE Badge */}
                  {feature.sale && (
                    <div
                      className="absolute flex items-center justify-center top-[11px] font-semibold text-white p-2 rotate-90 rounded-r-full w-[50px] h-[25px] bg-green-500"
                      style={{ left: feature.hot ? "40px" : "10px" }}
                    >
                      SALE
                    </div>
                  )}

                  {/* HOT Badge */}
                  {feature.hot && (
                    <div className="absolute flex items-center justify-center top-[11px] left-0 font-semibold text-white p-2 rotate-90 rounded-r-full w-[50px] h-[25px] bg-orange-500">
                      HOT
                    </div>
                  )}

                  {/* Hover Icons */}
                  <div
                    className={`hover-icons absolute left-0 flex items-center justify-between text-2xl space-x-2 w-full border border-gray-300 rounded-full bg-white shadow-md transition-all duration-500 ${
                      hoverToShowProdIcon === index
                        ? "bottom-5 opacity-100"
                        : "-bottom-full opacity-0"
                    }`}
                  >
                    <span className="heart p-2.5 bg-white hover:bg-green-500 text-gray-700 hover:text-white rounded-l-full cursor-pointer transition">
                      <CiHeart />
                    </span>
                    <span className="cart p-2.5 bg-white hover:bg-green-500 text-gray-700 hover:text-white cursor-pointer transition">
                      <PiShoppingCartThin />
                    </span>
                    <span className="eye p-2.5 bg-white hover:bg-green-500 text-gray-700 hover:text-white cursor-pointer transition">
                      <PiEyeLight />
                    </span>
                    <span className="convert p-2.5 bg-white hover:bg-green-500 text-gray-700 hover:text-white rounded-r-full cursor-pointer transition">
                      <LuArrowRightLeft />
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="para flex flex-col items-center gap-y-3 mt-3">
                  <span className="brand opacity-70 cursor-pointer hover:text-green-500 transition">
                    {feature.brand}
                  </span>
                  <span className="price font-bold text-lg">
                    {feature.price}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination */}
      <div className="custom-pagination mt-4 flex justify-center space-x-2"></div>
    </div>
  );
};

export default SliderSmall;
