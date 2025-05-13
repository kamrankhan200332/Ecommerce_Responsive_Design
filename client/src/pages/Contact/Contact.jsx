import React from "react";
import img1 from "../../assets/images/storeImages/img1.jpg";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <div>
          <div className="image h-[60vh] bg-gray-100 mb-20 py-10 relative">
            <img src={img1} className="w-full h-full object-cover" alt="" />
            <div className="shop absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center flex-col space-y-2">
              <h1 className="font-['Playfair_Display'] font-bold text-4xl">
                Contact
              </h1>
              <p className="text-xl">
                <Link to={"/"}>
                  <span className="hover:text-green-600 cursor-pointer">
                    Home{" "}
                  </span>
                </Link>
                / <span className="text-green-600">Contact</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 space-y-10 divide-x divide-gray-300">
          <div className="space-y-2 flex flex-col items-center w-full px-6 text-center">
            <h1 className="text-xl font-bold">
              <div className="icon border border-gray-300 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gray-200">
                <FaLocationDot />
              </div>
            </h1>
            <p className="font-semibold opacity-60">ADDRESS</p>
            <p className="font-semibold opacity-60 text-sm">
              Warsak road hakeem khan kalay peshawar
            </p>
          </div>
          <div className="space-y-2 flex flex-col items-center w-full ">
            <h1 className="text-xl font-bold">
              <div className="icon border border-gray-300 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gray-200">
                <FaHeadphones />
              </div>
            </h1>
            <p className="font-semibold opacity-60">PHONE</p>
            <p className="font-semibold opacity-60 text-sm">
              (+92) 311 9921465
            </p>
          </div>
          <div className="space-y-2 flex flex-col items-center w-full ">
            <h1 className="text-xl font-bold">
              <span className="icon border border-gray-300 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gray-200">
                <MdEmail />
              </span>
            </h1>
            <p className="font-semibold opacity-60">EMAIL</p>
            <p className="font-semibold opacity-60 text-sm">
              kamrankhan815.com@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="space-y-10">
          <div className="flex items-center justify-center flex-col space-y-5 text-center">
            <h1 className="font-['Playfair_Display'] text-4xl font-semibold">
              Get In Touch
            </h1>
            <p className="opacity-60">
              Lorem ipsum dolor consectetuer adipiscing elit sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna <br /> aliquam erat
              volutpatcommodo consequat.veniet quis?
            </p>
          </div>

          <div className="input space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <input
                  type="text"
                  className="border border-gray-300 py-3 px-4 w-full rounded"
                  placeholder="Your name..."
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-gray-300 py-3 px-4 w-full rounded"
                  placeholder="Your email..."
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-gray-300 py-3 px-4 w-full rounded"
                  placeholder="Your contact..."
                />
              </div>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Message..."
              className="border border-gray-300 py-3 px-4 w-full rounded"
            ></textarea>
            <div className=" flex items-center justify-center">
              <button className="bg-green-700 text-white hover:bg-green-800 font-bold cursor-pointer py-3 px-8 flex items-center justify-center rounded-full">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
