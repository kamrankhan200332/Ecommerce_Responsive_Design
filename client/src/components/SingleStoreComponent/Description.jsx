import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { LuArrowRightLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import image3 from "../../assets/images/storeImages/img51.jpg";
import image4 from "../../assets/images/storeImages/img52.jpg";
import image5 from "../../assets/images/storeImages/img50.jpg";
import image6 from "../../assets/images/storeImages/img52.jpg";

const Description = () => {
  const [hoverToShowProdIcon, setHoverToShowProdIcon] = useState(null);

  const images = [
    {
      id: 1,
      img: image3,
      brand: "Sit Volumptatem",
      price: "68.00$",
      sale: true,
    },
    {
      id: 2,
      img: image4,
      brand: "Sit Volumptatem",
      price: "68.00$",
    },
    {
      id: 3,
      img: image5,
      brand: "Sit Volumptatem",
      price: "68.00$",
      hot: true,
    },
    {
      id: 4,
      img: image6,
      brand: "Sit Volumptatem",
      price: "68.00$",
      sale: true,
      hot: true,
    },
  ];

  return (
    <div>
      <p>
        Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem
        ullamcorper volutpat. Vestibulum lacinia risus. Etiam sagittis
        ullamcorper volutpat. Vestibulum lacinia risus sed ligula malesuada
        volutpat.Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
        eleifend leo Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
        eleifend leo.
      </p>
      <div className="product">
        <h1>Related Products</h1>
        <div className="product">
          <div className="mainBox grid gap-7 [@media(max-width:480px)]:grid-cols-1 [@media(min-width:480px)_and_(max-width:990px)]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {images.map((feature, index) => (
              <Link
                to={`/store/single/${feature.id}`}
                key={index}
                className="box w-[100%] border border-gray-300"
                onMouseEnter={() => setHoverToShowProdIcon(index)}
                onMouseLeave={() => setHoverToShowProdIcon(null)}
              >
                <div className="img w-full relative overflow-hidden">
                  <img
                    src={feature.img}
                    className="object-cover w-full"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
