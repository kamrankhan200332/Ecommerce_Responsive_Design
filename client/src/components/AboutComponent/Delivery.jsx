import React from "react";
import lineRose from "../../assets/images/lineRose.png";

const Delivery = () => {
  return (
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
                There are many variations of passages of lorem ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, Both betanin.
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore.
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
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment.
              </p>
              <div className="step absolute top-[-16px] bg-green-700 px-5 py-1 font-bold text-white flex items-center justify-center">
                STEP 04
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
