import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AfterHero = () => {
  return (
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
        <p className="font-semibold opacity-60 text-sm">(+92) 311 9921465</p>
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
  );
};

export default AfterHero;
