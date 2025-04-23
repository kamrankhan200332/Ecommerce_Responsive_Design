import Hero from "../../components/SingleStoreComponent/Hero";
import Slider from "../../utills/Splide/Slider";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

import React, { useState } from "react";
import img from "../../assets/images/storeImages/img45.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import Description from "../../components/SingleStoreComponent/Description";
import Review from "../../components/SingleStoreComponent/Review";

const SingleStore = () => {
  const [counter, setCounter] = useState(1);
  const location = useLocation();
  const prod = location.state;

  const [description, setDescription] = useState(true);
  const [review, setReview] = useState(false);
  return (
    <div className="px-[70px]k space-y-10k space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>

      <div>
        <div className="xl:flex gap-5 space-y-7">
          <div className="singleImage w-full xl:w-[50%] ">
            <div className="img w-full">
              <img
                src={img}
                alt="singleImage"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="prodDetails w-full xl:w-[50%] space-y-7">
            <div className="heading space-y-2">
              <h1 className="text-3xl font-bold font-['Playfair_Display']">
                Pellentesque aliquet
              </h1>
              <div className="rating">
                <span>5starts </span>
                <span className="opacity-60">( 5 customer reviews )</span>
              </div>
              <span className="price text-2xl text-green-700 font-semibold">
                65.00$
              </span>
            </div>

            <div className="para">
              <p className="opacity-60">
                Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem
                ullamcorper volutpat. Vestibulum lacinia risus.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="opacity-60">Product Code: </span>{" "}
                <span>FA008</span>
              </p>
              <p>
                <span className="opacity-60">Quantity: </span>
                <span>68 Items</span>
              </p>
              <p>
                <span className="opacity-60">Shipping tax: </span>{" "}
                <span>Free</span>
              </p>
            </div>

            <div className="size flex space-x-7">
              <span className="font-semibold">SIZE: </span>
              <span className="flex space-x-4">
                <div className="space-x-1">
                  <input type="checkbox" />
                  <label htmlFor="L">L</label>
                </div>
                <div className="space-x-1">
                  <input type="checkbox" />
                  <label htmlFor="M">M</label>
                </div>
                <div className="space-x-1">
                  <input type="checkbox" />
                  <label htmlFor="S">S</label>
                </div>
                <div className="space-x-1">
                  <input type="checkbox" />
                  <label htmlFor="XL">XL</label>
                </div>
                <div className="space-x-1">
                  <input type="checkbox" />
                  <label htmlFor="XXL">XXL</label>
                </div>
              </span>
            </div>

            <div className="color flex space-x-3">
              <span className="font-semibold">COLOR:</span>
              <div className="flex space-x-3">
                <span className="w-[25px] h-[25px] bg-red-700 rounded-full"></span>
                <span className="w-[25px] h-[25px] bg-yellow-600 rounded-full"></span>
                <span className="w-[25px] h-[25px] bg-purple-700 rounded-full"></span>
              </div>
            </div>

            <div className="btn space-y-4 md:space-y-0 md:flex-col flex gap-4 items-center">
              <div className="counter text-xl flex rounded-full items-center justify-between border border-gray-400">
                <button
                  onClick={() =>
                    setCounter(counter > 1 ? counter - 1 : counter)
                  }
                  className=" cursor-pointer hover:bg-gray-200 w-full py-2 px-3 flex items-center justify-center rounded-l-full"
                >
                  ➖
                </button>
                <span className="border-gray-400 border border-t-0 border-b-0 px-10 w-full py-2 flex items-center justify-center">
                  {counter}
                </span>
                <button
                  className=" cursor-pointer rounded-r-full hover:bg-gray-200 w-full flex py-2 px-3 items-center justify-center"
                  onClick={() => setCounter(counter + 1)}
                >
                  ➕
                </button>
              </div>
              <button className="cursor-pointer  p-2 py-3 font-bold px-5 text-xl gap-x-3 text-white rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 ">
                Add To Cart <FaArrowRight />
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <span className="opacity-60">SHARE THIS PRODUCT:</span>
              <div className="socialIcons opacity-70 flex items-center justify-center space-x-4 text-xl">
                <span className="facebook border border-gray-600 rounded-full cursor-pointer hover:bg-green-700 hover:text-white hover:border-green-700 ">
                  <FaFacebookF />
                </span>
                <span className="twitter border border-gray-600 rounded-full cursor-pointer hover:bg-green-700 hover:text-white hover:border-green-700">
                  <FaTwitter />
                </span>
                <span className="instagram cursor-pointer hover:text-green-600">
                  <FaInstagramSquare />
                </span>
                <span className="linkedin cursor-pointer hover:text-green-600">
                  <FaLinkedin />
                </span>
              </div>
            </div>

            <div className="opacity-60 space-y-2">
              <p>
                <span>Categories: </span>
                <span>Butter & Eggs, Fruits, Milk & Cream, Vegetables</span>
              </p>
              <p>
                <span>Tags: </span>
                <span>organic food, fruits, juice</span>
              </p>
              <p>
                <span>Brand: </span> <span>KFC</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Slider />
      </div>

      <div>
        <div className="space-y-">
          <div className="flex items-center justify-center font-['Playfair_Display'] gap-7 text-4xl font-bold py-8">
            <button
              onClick={() => {
                setDescription(true);
                setReview(false);
              }}
              className={`${description && "text-green-700"}`}
            >
              Description
            </button>
            <button
              onClick={() => {
                setDescription(false);
                setReview(true);
              }}
              className={`${review && "text-green-700"}`}
            >
              Reviews
            </button>
          </div>
          {description && <Description />}
          {review && <Review />}
        </div>
      </div>

      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default SingleStore;
