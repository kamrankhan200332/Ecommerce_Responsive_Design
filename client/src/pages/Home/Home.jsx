import React, { useState, useEffect } from "react";
import Slider from "../../utills/Swiper/Slider";
import Page from "../Page/Page";
// import AfterHero from "../../components/AfterHero/AfterHero";
import img1 from "../../assets/images/img1.jpg";
import gamla1 from "../../assets/images/gamla1.png";
import gamla2 from "../../assets/images/gamla2.png";
import gamla3 from "../../assets/images/gamla3.png";
// import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import lineRose from "../../assets/images/lineRose.png";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { LuArrowRightLeft } from "react-icons/lu";
import FeaturedProductData from "../../constants/FeaturedProduct";

// import AfterFeaturedProd from "../../components/AfterFeaturedProd/AfterFeaturedProd";
import { BsTruck } from "react-icons/bs";
import { TfiGift } from "react-icons/tfi";
import { RiExchangeFundsLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

// import ImageSection from "../../components/ImageSection/ImageSection";
import imgClean from "../../assets/images/storeImages/clean.jpg";

// import DailyDeal from "../../components/DailyDeal/DailyDeal";
import SliderSmall from "../../utills/SwiperSmall/SliderSmall";

// import AfterDailyDeal from "../../components/AfterDailyDeal/AfterDailyDeal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { featureImages } from "../../constants/FeaturedProduct";

import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
  const [hoverToShowProdIcon, setHoverToShowProdIcon] = useState(null);

   const [timeLeft, setTimeLeft] = useState({
     hours: 0,
     minutes: 0,
     seconds: 0,
   });

   useEffect(() => {
     const timer = setInterval(() => {
       setTimeLeft((prevTime) => {
         let { hours, minutes, seconds } = prevTime;

         if (seconds === 59) {
           if (minutes === 59) {
             return { hours: hours + 1, minutes: 0, seconds: 0 };
           } else {
             return { hours, minutes: minutes + 1, seconds: 0 };
           }
         } else {
           return { hours, minutes, seconds: seconds + 1 };
         }
       });
     }, 1000);

     return () => clearInterval(timer);
   }, []);
  return (
    <>
      <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
        <div className="hero">
          <Slider />
        </div>
        
        <div className="afterHero">
          <div>
            <div className="main flex flex-col [@media(min-width:991px)]:flex-row">
              <div className="leftImage [@media(min-width:991px)]:w-[50%] px-2 object-center borderr">
                <img src={img1} alt="" />
              </div>

              <div className="rightContent w-full [@media(min-width:991px)]:w-[50%] px-3 space-y-6 lg:space-y-13 [@media(max-width:576px)]:space-y-3 borderr">
                <div className="space-y-8">
                  <h1 className="font-['Playfair_Display'] relative after:block after:content-[''] after:w-[100px] after:mt-4 after:h-[3px] after:bg-green-500 text-4xl font-semibold">
                    Why choose us?
                  </h1>
                  <p className="opacity-60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    impedit assumenda distinctio ipsa, necessitatibus ipsum.
                    Praesentium asperiores iste minus accusamus in. Mollitia
                    quae, ea dolorum adipisci laboriosam odit. ...{" "}
                    <span className="text-green-500 italic">Learn More</span>
                  </p>
                </div>
                <div className="space-y-5 lg:space-y-10 [@media(max-width:576px)]:space-y-3">
                  <div className="boxPara flex space-x-1">
                    <div className="img w-[13%] flex items-center justify-center borderr">
                      <img src={gamla1} alt="gamla" />
                    </div>
                    <div className="para flex-1 space-y-1">
                      <h1 className="text-xl font-semibold">Hand Planted</h1>
                      <p className="opacity-60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis, nisi nulla! Pariatur excepturi dolorum tenetur vel
                        accusantium libero porr.
                      </p>
                    </div>
                  </div>

                  <div className="boxPara flex space-x-1">
                    <div className="img w-[13%] flex items-center justify-center borderr">
                      <img src={gamla2} alt="gamla" />
                    </div>
                    <div className="para flex-1 space-y-1">
                      <h1 className="text-xl font-semibold">
                        Natural Sunlight
                      </h1>
                      <p className="opacity-60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis, nisi nulla! Pariatur excepturi dolorum tenetur vel
                        accusantium libero porr.
                      </p>
                    </div>
                  </div>

                  <div className="boxPara flex space-x-1">
                    <div className="img w-[13%] flex items-center justify-center borderr">
                      <img src={gamla3} alt="gamla" />
                    </div>
                    <div className="para flex-1 space-y-1">
                      <h1 className="text-xl font-semibold">Clean Air</h1>
                      <p className="opacity-60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis, nisi nulla! Pariatur excepturi dolorum tenetur vel
                        accusantium libero porr.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="featureProduct">
          <div className="space-y-10">
            <div className="flex items-center justify-center flex-col space-y-5">
              <h1 className="font-['Playfair_Display'] text-4xl font-semibold">
                Featured Product
              </h1>
              <div className="lineRose">
                <img src={lineRose} alt="lineRose" />
              </div>
              <p className="opacity-60">
                Lorem ipsum dolor sit amet adipisicing elit. Illum voluptatibus
                incidunt eveniet quis?
              </p>
            </div>

            <div className="mainBox grid gap-7 [@media(max-width:480px)]:grid-cols-1 [@media(min-width:480px)_and_(max-width:990px)]:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
              {FeaturedProductData.map((feature, index) => (
                <div
                  key={index}
                  className="box w-[100%] border border-gray-300"
                  onMouseEnter={() => setHoverToShowProdIcon(index)}
                  onMouseLeave={() => setHoverToShowProdIcon(null)}
                >
                  <div className="img w-full relative overflow-hidden">
                    <img
                      src={feature.img}
                      className="object-cover [@media(max-width:990px)]:w-full"
                      alt="box1"
                    />
                    {feature.sale && (
                      <div className="">
                        <div
                          className={`saveHot flex items-center justify-center bg-green-500 absolute top-[11px] font-semibold p-2 left-0k rotate-90 text-white rounded-r-full w-[50px] h-[25px] ${
                            feature.hot ? "left-10" : "left-0"
                          }`}
                        >
                          SALE
                        </div>
                      </div>
                    )}
                    {feature.hot && (
                      <div className="saveHot flex items-center justify-center bg-orange-500 absolute top-[11px] font-semibold p-2 left-0 rotate-90 text-white rounded-r-full w-[50px] h-[25px]">
                        HOT
                      </div>
                    )}
                    <div
                      className={`hover absolute left-0 flex items-center justify-between text-2xl space-x-2 w-full border border-gray-300 rounded-full ${
                        hoverToShowProdIcon === index
                          ? "bottom-5"
                          : "-bottom-full"
                      } transition-all duration-500 ease-in-outk`}
                    >
                      <span className="heart p-2.5 bg-white hover:cursor-pointer hover:text-white hover:bg-green-500 duration-300 rounded-l-full">
                        <CiHeart />
                      </span>
                      <span className="cart p-2.5 hover:text-white hover:bg-green-500 duration-300 bg-white hover:cursor-pointer">
                        <PiShoppingCartThin />
                      </span>
                      <span className="eye p-2.5 hover:text-white hover:bg-green-500 duration-300 bg-white hover:cursor-pointer">
                        <PiEyeLight />
                      </span>
                      <span className="convert p-2.5 hover:text-white hover:bg-green-500 duration-300 bg-white rounded-r-full hover:cursor-pointer">
                        <LuArrowRightLeft />
                      </span>
                    </div>
                  </div>
                  <div className="para flex flex-col items-center gap-y-3 my-3">
                    <span className="brand opacity-70 cursor-pointer hover:text-green-500 duration-300">
                      {feature.brand}
                    </span>
                    <span className="price font-bold">{feature.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="afterFeaturedProd">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="box flex items-center justify-start border border-gray-300 p-4 w-full rounded-full space-x-3">
              <div className="img text-5xl text-green-300">
                <BsTruck />
              </div>
              <div className="para flex items-centerr justify-center flex-col">
                <h1 className="font-semibold">Free shipping order</h1>
                <p className="opacity-60">On orders over $100</p>
              </div>
            </div>
            <div className="box flex items-center justify-start border border-gray-300 p-4 w-full rounded-full space-x-3">
              <div className="img text-5xl text-green-300">
                <TfiGift />
              </div>
              <div className="para flex items-centerr justify-center flex-col">
                <h1 className="font-semibold">Special gift card</h1>
                <p className="opacity-60">The perfect gift idea</p>
              </div>
            </div>
            <div className="box flex items-center justify-start border border-gray-300 p-4 w-full rounded-full space-x-3">
              <div className="img text-5xl text-green-300">
                <RiExchangeFundsLine />
              </div>
              <div className="para flex items-centerr justify-center flex-col">
                <h1 className="font-semibold">Return & exchange</h1>
                <p className="opacity-60">Free returns within 3 days</p>
              </div>
            </div>
            <div className="box flex items-center justify-start border border-gray-300 p-4 w-full rounded-full space-x-3">
              <div className="img text-5xl text-green-300">
                <IoCallOutline />
              </div>
              <div className="para flex items-centerr justify-center flex-col">
                <h1 className="font-semibold">Support 24 / 7</h1>
                <p className="opacity-60">Customer support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="imageSection">
          <div>
            <div className="images grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="image1 w-full relative overflow-hidden">
                <img
                  src={imgClean}
                  className="object-cover object-left w-full hover:scale-110 duration-500"
                  alt="img1"
                />
                <div className="absolute top-[50%] md:space-y-2 xl:space-y-3  right-[50%] translate-x-[50%] -translate-y-[50%]">
                  <h1 className="text-2xl font-bold font-['Playfair_Display'] xl:text-4xl">
                    New Product
                  </h1>
                  <p className="font-semibold lg:text-xl">
                    POTTED IN HOME{" "}
                    <span className="text-red-600 italic font-bold text-xl">
                      {" "}
                      36% off{" "}
                    </span>
                  </p>
                  <button className="text-green-700 cursor-pointer hover:text-green-800 duration-500 font-semibold">
                    shop Now
                  </button>
                </div>
              </div>

              <div className="image1 w-full relative overflow-hidden">
                <img
                  src={imgClean}
                  className=" object-cover object-left w-full hover:scale-110 duration-500"
                  alt="img1"
                />
                <div className="absolute top-[50%] md:space-y-2 xl:space-y-3  right-[50%] translate-x-[50%] -translate-y-[50%]">
                  <h1 className="text-2xl font-bold font-['Playfair_Display'] xl:text-4xl">
                    House Plants
                  </h1>
                  <p className="font-semibold lg:text-xl">New Trending 2025</p>
                  <button className="text-green-700 cursor-pointer hover:text-green-800 duration-500 font-semibold">
                    shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dailyDeal">
          <div>
            <div className="space-y-10">
              <div className="flex items-center justify-center flex-col space-y-5">
                <h1 className="font-['Playfair_Display'] text-4xl font-semibold">
                  Daily Deal
                </h1>
                <div className="lineRose">
                  <img src={lineRose} alt="lineRose" />
                </div>
                <p className="opacity-60">
                  Lorem ipsum dolor sit amet adipisicing elit. Illum
                  voluptatibus incidunt eveniet quis?
                </p>
                <div className="count flex items-center gap-5">
                  <div className="hours flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-green-500">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <p className="opacity-60">Hours</p>
                  </div>
                  <div className="text-3xl font-bold text-green-500">:</div>
                  <div className="hours flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-green-500">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <p className="opacity-60">Minutes</p>
                  </div>
                  <div className="text-3xl font-bold text-green-500">:</div>
                  <div className="hours flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-green-500">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <p className="opacity-60">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="SmallSlider">
              <SliderSmall />
            </div>
          </div>
        </div>

        <div>
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
        </div>

        <div>
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Home;
