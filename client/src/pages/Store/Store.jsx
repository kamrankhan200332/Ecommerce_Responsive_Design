import React, { useState } from "react";

import img2 from "../../assets/images/storeImages/img1.jpg";
import { Link } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import img from "../../assets/images/storeImages/img41.jpg";
import { FaBorderAll } from "react-icons/fa";
import { RiListUnordered } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { LuArrowRightLeft } from "react-icons/lu";
import FeaturedProductData from "../../constants/FeaturedProduct";

import img1 from "../../assets/images/storeImages/clean.jpg";

import lineRose from "../../assets/images/lineRose.png";
import { FaArrowRight } from "react-icons/fa6";

const Store = () => {
  const [price, setPrice] = useState(399);
  const [hoverToShowProdIcon, setHoverToShowProdIcon] = useState(null);
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div className="hero">
        <div className="image h-[60vh] bg-gray-100 mb-20 py-10 relative">
          <img src={img2} className="w-full h-full object-cover" alt="" />
          <div className="shop absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center flex-col space-y-2">
            <h1 className="font-['Playfair_Display'] font-bold text-4xl">
              Shop
            </h1>
            <p className="text-xl">
              <Link to={"/"}>
                <span className="hover:text-green-600 cursor-pointer">
                  Home{" "}
                </span>
              </Link>
              / <span className="text-green-600">Shop</span>
            </p>
          </div>
        </div>
      </div>

      <div className="filter_products [@media(min-width:480px)_and_(max-width:990px)]:mx-[70px]">
        <div className="Filter_Products flex gap-8 gap-y-13 [@media(max-width:990px)]:flex-col-reverse ">
          <div className="filter [@media(max-width:990px)]:w-full w-[25%] bg-gray-200k space-y-10">
            <div className="input relative opacity-70">
              <input
                type="text"
                className="border py-2 px-3 w-full border-gray-300"
                placeholder="Search product..."
              />
              <div className="icon absolute top-3 right-3 text-xl">
                <IoIosSearch />
              </div>
            </div>
            <div className="prod space-y-5">
              <h1 className=" font-semibold">PRODUCTS CATEGORIES</h1>
              <div className="space-y-10 opacity-70">
                <div className="filter space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="">Dried</label>
                    <span className="px-3 border border-gray-300 rounded">
                      6
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="">Vegetables</label>
                    <span className="px-3 border border-gray-300 rounded">
                      8
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="">Fruits</label>
                    <span className="px-3 border border-gray-300 rounded">
                      9
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="">Juice</label>
                    <span className="px-3 border border-gray-300 rounded">
                      6
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="">Uncategorized</label>
                    <span className="px-3 border border-gray-300 rounded">
                      1
                    </span>
                  </div>
                </div>

                <div className="space-y-5">
                  <h1 className="font-bold">FILTER BY PRICE</h1>
                  <div className="space-y-3">
                    <div className="range">
                      <input
                        type="range"
                        min={100}
                        max={10000}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="btn flex items-center justify-between">
                      <button className="bg-green-700 text-white hover:bg-green-800 py-1 px-4 font-semibold rounded-full flex items-center justify-center cursor-pointer">
                        FILTER
                      </button>
                      {/* <span>Price: $0 - $50</span> */}
                      <span>Price: ${price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <h1 className="font-semibold">TOP RATE</h1>
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <div className="img">
                        <img
                          src={img}
                          alt="image"
                          className="object-cover h-[75px] w-[75px]"
                        />
                      </div>
                      <div className="para flex flex-col">
                        <span>Vitamin C face wash</span>
                        <span className="font-semibold">21.00$</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="img ">
                        <img
                          src={img}
                          alt="image"
                          className="object-cover h-[75px] w-[75px]"
                        />
                      </div>
                      <div className="para flex flex-col">
                        <span>Vitamin C face wash</span>
                        <span className="font-semibold">21.00$</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="img ">
                        <img
                          src={img}
                          alt="image"
                          className="object-cover h-[75px] w-[75px]"
                        />
                      </div>
                      <div className="para flex flex-col">
                        <span>Vitamin C face wash</span>
                        <span className="font-semibold">21.00$</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="img ">
                        <img
                          src={img}
                          alt="image"
                          className="object-cover h-[75px] w-[75px]"
                        />
                      </div>
                      <div className="para flex flex-col">
                        <span>Vitamin C face wash</span>
                        <span className="font-semibold">21.00$</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="img ">
                        <img
                          src={img}
                          alt="image"
                          className="object-cover h-[75px] w-[75px]"
                        />
                      </div>
                      <div className="para flex flex-col">
                        <span>Vitamin C face wash</span>
                        <span className="font-semibold">21.00$</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <h1 className="font-semibold">PRODUCT TAGS</h1>
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                      Plant
                    </span>
                    <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                      Floor
                    </span>
                    <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                      Indoor
                    </span>
                    <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                      Green
                    </span>
                    <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                      Healthy
                    </span>
                    <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                      Cactus
                    </span>
                    <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                      House Plant
                    </span>
                    <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                      Office tree
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="products w-[75%] [@media(max-width:990px)]:w-full  space-y-10">
            <div className="order flex gap- gap-y-5 justify-between opacity-70 [@media(min-width:480px)_and_(max-width:990px)]:flex-col [@media(min-width:480px)_and_(max-width:990px)]:flex-">
              <div className="flex items-center gap-3">
                <span className="text-2xl border border-gray-400 p-1">
                  <FaBorderAll />
                </span>
                <span className="text-2xl border border-gray-400 p-1">
                  <RiListUnordered />
                </span>
                <span>Showing 1-9 of 24 results</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Sort by:</span>
                <select
                  name=""
                  id=""
                  className="border py-1.5 px-1 rounded cursor-pointer"
                >
                  <option value="">Default sorting</option>
                  <option value="">Default Order</option>
                  <option value="">Default Order</option>
                  <option value="">Default Order</option>
                  <option value="">Default Order</option>
                </select>
              </div>
            </div>

            <div className="product">
              <div className="mainBox grid gap-7 [@media(max-width:480px)]:grid-cols-1 [@media(min-width:480px)_and_(max-width:990px)]:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
                {FeaturedProductData.map((feature, index) => (
                  <Link
                    to={`/store/single/${feature.id}`}
                    state={feature}
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="imageSection [@media(min-width:480px)_and_(max-width:990px)]:mx-[70px]">
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
                    Lorem ipsum dolor sit amt adipisicing elit. Illum
                    voluptatibus incident evening quiz?
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
      </div>
    </div>
  );
};

export default Store;
