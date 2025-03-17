import React from "react";
import lineRose from "../../assets/images/lineRose.png";
import { FaArrowRight } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div>
      <div className="newsLetter bg-gray-100 py-10 md:py-13 lg:py-25 sm:py-30k px-6">
        <div className="flex items-center justify-center flex-col space-y-13">
          <div className="flex items-center justify-center flex-col space-y-5">
            <h1 className="font-['Playfair_Display'] text-4xl font-semibold [@media(max-width:480px)]:text-[25px] text-center">
              Subscribe Our Newsletter
            </h1>
            <div className="lineRose">
              <img src={lineRose} alt="lineRose" />
            </div>
            <p className="opacity-60 text-center">
              Lorem ipsum dolor sit amt adipisicing elit. Illum voluptatibus
              incident evening quiz?
            </p>
          </div>
          <div className="input md:w-[75%] lg:w-[50%] relative w-full flex flex-col space-y-3 ">
            <input
              type="text"
              className="py-3 px-6 w-full text-[18px] rounded-full bg-gray-200 "
              placeholder="Enter your email..."
            />
            <button className="md:absolute py-3 static md:top-0 md:right-0 cursor-pointer font-bold px-6 text-[18px] gap-x-3 text-white rounded-full bg-green-500 md:font-semibold flex items-center justify-center hover:bg-green-600 ">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
