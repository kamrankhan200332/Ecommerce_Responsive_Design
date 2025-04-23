import Hero from "../../components/AboutComponent/Hero";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

import img from "../../assets/images/storeImages/img80.jpg";
import lineRose from "../../assets/images/lineRose.png";

import React, { useState, useRef } from "react";

import img1 from "../../assets/images/storeImages/img84.jpg";
import img2 from "../../assets/images/storeImages/img82.jpg";
import img3 from "../../assets/images/storeImages/img83.jpg";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {

  const [show, setShow] = useState(1); // Set default to the first item
  const contentRefs = useRef({}); // Stores refs for each accordion

  const handleShow = (id) => {
    setShow((prev) => (prev === id ? null : id));
  };

  const accordionData = [
    {
      id: 1,
      data: "CONNECTING PEOPLE",
      info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!.",
    },
    {
      id: 2,
      data: "WE BUILD YOUR DREAM",
      info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!.",
    },
    {
      id: 3,
      data: "NOTHING TO FEAR",
      info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!.",
    },
    {
      id: 4,
      data: "MAKE THE WORLD BETTER",
      info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!.",
    },
  ];

  const [hoverState, setHoverState] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>

      <div>
        <div>
          <div className="flex-col flex md:flex-row gap-10">
            <div className="w-full md:w-[50%] space-y-10 flex flex-col justify-center">
              <h1 className="text-4xl font-bold font-['Playfair_Display'] relative after:block after:content-[''] after:w-[100px] after:mt-4 after:h-[3px] after:bg-green-500 ">
                A Minimal Team <br /> For a Better World
              </h1>
              <p className="text-justify">
                Lorem Khaled Ipsum is a major key to success. The ladies always
                say Khaled you smell good, I use no cologne. Cocoa butter is the
                key. To succeed you must believe. When you believe, you will
                succeed. They will try to close the door on you, just open it.
                The key is to drink coconut, fresh coconut, trust me. It’s
                important to use cocoa butter. It’s the key to more success, why
                not live smooth?
              </p>
            </div>
            <div className="image w-full md:w-[50%]">
              <img src={img} className="object-cover w-full" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 space-y-4 divide-x divide-gray-300">
          <div className="space-y-2 flex flex-col items-center w-full">
            <h1 className="text-6xl font-bold opacity-70">229</h1>
            <p className="font-semibold opacity-60">HAPPY CLIENTS</p>
          </div>
          <div className="space-y-2 flex flex-col items-center w-full ">
            <h1 className="text-6xl font-bold opacity-70">109</h1>
            <p className="font-semibold opacity-60">COMPLETED PROJECTS</p>
          </div>
          <div className="space-y-2 flex flex-col items-center w-full ">
            <h1 className="text-6xl font-bold opacity-70">22</h1>
            <p className="font-semibold opacity-60">AWESOME STAFF</p>
          </div>
          <div className="space-y-2 flex flex-col items-center w-full">
            <h1 className="text-6xl font-bold opacity-70">11</h1>
            <p className="font-semibold opacity-60">WINNING AWARDS</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="image w-full md:w-[50%]">
              <img src={img} className="object-cover w-full" alt="" />
            </div>
            <div className="w-full md:w-[50%] space-y-3 flex flex-col justify-center">
              {accordionData.map((accordion) => (
                <div className="border border-gray-400 p-4" key={accordion.id}>
                  <div
                    className="flex items-center justify-between opacity-80 cursor-pointer"
                    onClick={() => handleShow(accordion.id)}
                  >
                    <h1 className="font-semibold">{accordion.data}</h1>
                    <span>{show === accordion.id ? "➖" : "➕"}</span>
                  </div>

                  {/* Smooth transition using dynamic height */}
                  <div
                    ref={(el) => (contentRefs.current[accordion.id] = el)}
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      height:
                        show === accordion.id
                          ? contentRefs.current[accordion.id]?.scrollHeight
                          : 0,
                      opacity: show === accordion.id ? 1 : 0,
                    }}
                  >
                    <p className="pt-4">{accordion.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="space-y-10">
          <div className="flex items-center justify-center flex-col space-y-5">
            <h1 className="font-['Playfair_Display'] text-4xl font-semibold">
              Delivery Process
            </h1>
            <div className="lineRose">
              <img src={lineRose} alt="lineRose" />
            </div>
          </div>

          <div className="delivery space-y-5">
            <div className="first flex flex-col md:flex-row space-y-7 md:space-y-0">
              <div className="w-full md:w-[80%] lg:w-[50%]">
                <div className="w-full md:w-[75%] m-auto py-8 px-5 space-y-3 bg-gray-200 relative">
                  <h1 className="font-semibold">CHOOSE YOUR PRODUCTS</h1>
                  <p className="opacity-70">
                    There are many variations of passages of lorem ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, Both betanin.
                  </p>
                  <div className="step absolute top-[-16px] bg-green-700 px-5 py-1 font-bold text-white flex items-center justify-center">
                    STEP 01
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[20%] lg:w-[50%]"></div>
            </div>

            <div className="first flex flex-col md:flex-row mb-10 md:space-y-0">
              <div className="w-full md:w-[20%] lg:w-[50%]"></div>
              <div className="w-full md:w-[80%] lg:w-[50%]">
                <div className="w-full md:w-[75%] m-auto py-8 px-5 space-y-3 bg-gray-200 relative">
                  <h1 className="font-semibold">CONNECT NEAREST STORED</h1>
                  <p className="opacity-70">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <div className="step absolute top-[-16px] bg-green-700 px-5 py-1 font-bold text-white flex items-center justify-center">
                    STEP 02
                  </div>
                </div>
              </div>
            </div>

            <div className="first flex flex-col md:flex-row space-y-7 md:space-x-7">
              <div className="w-full md:w-[80%] lg:w-[50%]">
                <div className="w-full md:w-[75%] m-auto py-8 px-5 space-y-3 bg-gray-200 relative">
                  <h1 className="font-semibold">SHARE YOUR LOCATION</h1>
                  <p className="opacity-70">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                  <div className="step absolute top-[-16px] bg-green-700 px-5 py-1 font-bold text-white flex items-center justify-center">
                    STEP 03
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[20%] lg:w-[50%]"></div>
            </div>

            <div className="first flex flex-col md:flex-row md:space-x-7">
              <div className="w-full md:w-[20%] lg:w-[50%]"></div>
              <div className="w-full md:w-[80%] lg:w-[50%]">
                <div className="w-full md:w-[75%] m-auto py-8 px-5 space-y-3 bg-gray-200 relative">
                  <h1 className="font-semibold">GET DELIVERED FAST</h1>
                  <p className="opacity-70">
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment.
                  </p>
                  <div className="step absolute top-[-16px] bg-green-700 px-5 py-1 font-bold text-white flex items-center justify-center">
                    STEP 04
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
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
                onMouseEnter={() =>
                  setHoverState({ ...hoverState, img2: true })
                }
                onMouseLeave={() =>
                  setHoverState({ ...hoverState, img2: false })
                }
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
                onMouseEnter={() =>
                  setHoverState({ ...hoverState, img1: true })
                }
                onMouseLeave={() =>
                  setHoverState({ ...hoverState, img1: false })
                }
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
                onMouseEnter={() =>
                  setHoverState({ ...hoverState, img3: true })
                }
                onMouseLeave={() =>
                  setHoverState({ ...hoverState, img3: false })
                }
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
      </div>

      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default About;
