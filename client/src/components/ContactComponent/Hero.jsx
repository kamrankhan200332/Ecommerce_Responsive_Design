import React from "react";
import img1 from "../../assets/images/storeImages/img1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="image h-[60vh] bg-gray-100 mb-20 py-10 relative">
        <img src={img1} className="w-full h-full object-cover" alt="" />
        <div className="shop absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center flex-col space-y-2">
          <h1 className="font-['Playfair_Display'] font-bold text-4xl">Contact</h1>
          <p className="text-xl">
            <Link to={"/"}>
              <span className="hover:text-green-600 cursor-pointer">Home </span>
            </Link>
            / <span className="text-green-600">Contact</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
