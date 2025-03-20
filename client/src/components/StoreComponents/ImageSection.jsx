import React from "react";
import img1 from "../../assets/images/storeImages/clean.jpg";

import lineRose from "../../assets/images/lineRose.png";
import { FaArrowRight } from "react-icons/fa6";

const ImageSection = () => {
  return (
    <div className="">
      <div className="image1 w-full h-full relative overflow-hidden ">
        <img
          src={img1}
          className="object-cover object-left w-full hover:scale-110 duration-500"
          alt="img1"
        />
        <div className="flex items-center justify-center flex-col space-y-13">
          <div className="absolute top-[50%] md:space-y-2 xl:space-y-3 right-[50%] translate-x-[50%] -translate-y-[50%]">
            <div className=" flex items-center justify-center flex-col space-y-5 [@media(min-width:480px)_and_(max-width:990px)]:space-y-2">
              <h1 className="font-['Playfair_Display'] [@media(min-width:480px)_and_(max-width:990px)]:text-xl text-4xl font-semibold [@media(max-width:480px)]:text-[25px] text-center">
                Subscribe Our Newsletter
              </h1>
              <div className="lineRose">
                <img src={lineRose} alt="lineRose" />
              </div>
              <p className="opacity-60 text-center [@media(min-width:480px)_and_(max-width:990px)]:text-sm">
                Lorem ipsum dolor sit amt adipisicing elit. Illum voluptatibus
                incident evening quiz?
              </p>
            </div>
            <div className="input md:w-[75%]k lg:w-[50%]k relative w-full flex flex-col space-y-2 ">
              <input
                type="text"
                className="py-3 px-6 w-full text-[18px] [@media(min-width:480px)_and_(max-width:990px)]:text-[16px] [@media(min-width:480px)_and_(max-width:990px)]:py-2 rounded-full bg-gray-200 "
                placeholder="Enter your email..."
              />
              <button className="md:absolute py-3 static md:top-0 md:right-0 cursor-pointer font-bold px-6 text-[18px] gap-x-3 [@media(min-width:480px)_and_(max-width:990px)]:py-2 [@media(min-width:480px)_and_(max-width:990px)]:text-[16px] text-white rounded-full bg-green-500 md:font-semibold flex items-center justify-center hover:bg-green-600 ">
                Shop Now <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
