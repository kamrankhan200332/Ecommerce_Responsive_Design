import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="[@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div className=" space-y-20">
        <div className="footer [@media(max-width:680px)]:grid-cols-1 sm:grid-cols-2 grid grid-cols-4 lg:grid-cols-4 justify-between gap-6">
          <div className="contact space-y-6 w-[100%] ">
            <h1 className="font-bold">CONTACT US</h1>
            <div className="space-y-3">
              <div className="address flex justify-start space-x-2">
                <span className="icon pt-1">
                  <CiLocationOn />
                </span>
                <span className="font-bold opacity-80">
                  Address: Warsak Road Hakeem Khan Kalay Peshawar.
                </span>
              </div>
              <div className="opacity-70 flex justify-start space-x-2">
                <span className="icon">
                  <IoCallOutline />
                </span>
                <span>Phone:(+92) 3119921465</span>
              </div>
              <div className="opacity-70 flex justify-start space-x-2">
                <span className="icon pt-1">
                  <MdOutlineEmail />
                </span>
                <span>Email: kamrankhan815.com@gmail.com</span>
              </div>
              <div className="socialLinks flex items-center justify-between">
                <h1 className="font-bold opacity-80">Follow us:</h1>
                <div className="socialIcons flex items-center justify-center space-x-4 text-xl">
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
            </div>
          </div>
          <div className="info space-y-6  w-[80%]">
            <h1 className="font-bold">INFORMATION</h1>
            <div className="opacity-70 flex flex-col space-y-3">
              <span className="hover:text-green-600 cursor-pointer duration-500">
                New Products
              </span>
              <span className="hover:text-green-600 cursor-pointer duration-500">
                Top Sellers
              </span>
              <span className="hover:text-green-600 cursor-pointer duration-500">
                Our Blog
              </span>
              <span className="hover:text-green-600 cursor-pointer duration-500">
                About Our Shop
              </span>
              <span className="hover:text-green-600 cursor-pointer duration-500">
                Privacy Policy
              </span>
            </div>
          </div>
          <div className="info space-y-6  w-[80%] ">
            <h1 className="font-bold">MY ACCOUNT</h1>
            <div className="opacity-70 flex flex-col space-y-3">
              <span className="hover:text-green-600 cursor-pointer duration-500">
                My Account
              </span>
              <span className="hover:text-green-600 cursor-pointer duration-500">
                Discount
              </span>
              <span className="hover:text-green-600 cursor-pointer duration-500">
                Orders history
              </span>
              <span className="hover:text-green-600 cursor-pointer duration-500">
                Personal information
              </span>
            </div>
          </div>
          <div className="popularProduct space-y-6  w-[90%]">
            <h1 className="font-bold">POPULAR TAG</h1>
            <div className="opacity-70 space-y-3">
              <div className="box1 space-x-3 grid grid-cols-2">
                <span className="border border-slate-400 rounded-full py-1.5 flex items-center justify-center">
                  Trend
                </span>
                <span className="border border-slate-400 rounded-full py-1.5 flex items-center justify-center">
                  Decor
                </span>
              </div>
              <div className="box1 space-x-3 grid grid-cols-2">
                <span className="border border-slate-400 rounded-full py-1.5 flex items-center justify-center">
                  Plant
                </span>
                <span className="border border-slate-400 rounded-full py-1.5  flex items-center justify-center">
                  Table tree
                </span>
              </div>
              <div className="box1 space-x-3 grid grid-cols-2">
                <span className="border border-slate-400 rounded-full py-1.5 flex items-center justify-center">
                  Bedroom tree
                </span>
                <span className="border border-slate-400 rounded-full py-1.5 flex items-center justify-center">
                  Living room
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hr text-gray-400">
          <hr />
        </div>
      </div>
      <div className="copyRight py-7 flex items-center justify-center">
        Copyright 2025 by
        <span className="text-green-700 cursor-pointer">
          {" "}
          Botanical Store{" "}
        </span>{" "}
        - All right reserved
      </div>
    </div>
  );
};

export default Footer;
