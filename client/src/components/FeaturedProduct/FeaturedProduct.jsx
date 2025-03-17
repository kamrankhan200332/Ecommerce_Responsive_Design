import React, { useState } from "react";
import lineRose from "../../assets/images/lineRose.png";
import box1 from "../../assets/images/box1.jpg";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { LuArrowRightLeft } from "react-icons/lu";
import FeaturedProductData from "../../constants/FeaturedProduct";

const FeaturedProduct = () => {
  const [hoverToShowProdIcon, setHoverToShowProdIcon] = useState(null);
  return (
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
              <div
                className={`hover absolute left-0 flex items-center justify-between text-2xl space-x-2 w-full border border-gray-300 rounded-full ${
                  hoverToShowProdIcon === index ? "bottom-5" : "-bottom-full"
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
  );
};

export default FeaturedProduct;
