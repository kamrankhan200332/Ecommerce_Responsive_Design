import React from "react";
import img1 from "../../assets/images/storeImages/clean.jpg";
import img2 from "../../assets/images/ad2.jpg";

const ImageSection = () => {
  return (
    <div>
      <div className="images grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="image1 w-full relative overflow-hidden">
          <img
            src={img1}
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
            src={img1}
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
  );
};

export default ImageSection;
