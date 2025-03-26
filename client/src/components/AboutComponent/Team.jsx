import React, { useState } from "react";
import lineRose from "../../assets/images/lineRose.png";
import img1 from "../../assets/images/storeImages/img84.jpg";
import img2 from "../../assets/images/storeImages/img82.jpg";
import img3 from "../../assets/images/storeImages/img83.jpg";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const [hoverState, setHoverState] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center flex-col space-y-5">
        <h1 className="font-['Playfair_Display'] text-4xl font-semibold">
          Meet Our Team
        </h1>
        <div className="lineRose">
          <img src={lineRose} alt="lineRose" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-5">
        <div className="image w-full space-y-3">
          <div
            className="img relative group"
            onMouseEnter={() => setHoverState({ ...hoverState, img2: true })}
            onMouseLeave={() => setHoverState({ ...hoverState, img2: false })}
          >
            <img
              src={img2}
              alt=""
              className="object-cover w-full transition-opacity duration-300 group-hover:opacity-50"
            />

            {hoverState.img2 && (
              <div className="socialIcons absolute top-[50%] left-[20%] translate-x-[50%] -translate-y-[50%] flex items-center justify-center space-x-4 text-xl">
                <span className="facebook border border-gray-600 rounded-full cursor-pointer hover:bg-green-700 hover:text-white hover:border-green-700">
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
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">PROF ALI AHMAD</h1>
            <p className="opacity-60">Mathematician</p>
          </div>
        </div>

        <div className="image w-full space-y-3">
          <div
            className="img relative group"
            onMouseEnter={() => setHoverState({ ...hoverState, img1: true })}
            onMouseLeave={() => setHoverState({ ...hoverState, img1: false })}
          >
            <img
              src={img1}
              alt=""
              className="object-cover w-full transition-opacity duration-300 group-hover:opacity-50"
            />

            {hoverState.img1 && (
              <div className="socialIcons absolute top-[50%] left-[20%] translate-x-[50%] -translate-y-[50%] flex items-center justify-center space-x-4 text-xl">
                <span className="facebook border border-gray-600 rounded-full cursor-pointer hover:bg-green-700 hover:text-white hover:border-green-700">
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
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">KAMRAN KHAN</h1>
            <p className="opacity-60">Web Developer & CEO</p>
          </div>
        </div>

        <div className="image w-full space-y-3">
          <div
            className="img relative group"
            onMouseEnter={() => setHoverState({ ...hoverState, img3: true })}
            onMouseLeave={() => setHoverState({ ...hoverState, img3: false })}
          >
            <img
              src={img3}
              alt=""
              className="object-cover w-full transition-opacity duration-300 group-hover:opacity-50"
            />

            {hoverState.img3 && (
              <div className="socialIcons absolute top-[50%] left-[20%] translate-x-[50%] -translate-y-[50%] flex items-center justify-center space-x-4 text-xl">
                <span className="facebook border border-gray-600 rounded-full cursor-pointer hover:bg-green-700 hover:text-white hover:border-green-700">
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
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">MISS ANGELA</h1>
            <p className="opacity-60">Chief of Marketing Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
