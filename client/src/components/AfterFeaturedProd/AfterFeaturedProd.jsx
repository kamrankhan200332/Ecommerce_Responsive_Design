import React from "react";
import { BsTruck } from "react-icons/bs";
import { TfiGift } from "react-icons/tfi";
import { RiExchangeFundsLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

const AfterFeaturedProd = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="box flex items-center justify-start border border-gray-300 p-4 w-full rounded-full space-x-3">
        <div className="img text-5xl text-green-300">
          <BsTruck />
        </div>
        <div className="para flex items-centerr justify-center flex-col">
          <h1 className="font-semibold">Free shipping order</h1>
          <p className="opacity-60">On orders over $100</p>
        </div>
      </div>
      <div className="box flex items-center justify-start border border-gray-300 p-4 w-full rounded-full space-x-3">
        <div className="img text-5xl text-green-300">
          <TfiGift />
        </div>
        <div className="para flex items-centerr justify-center flex-col">
          <h1 className="font-semibold">Special gift card</h1>
          <p className="opacity-60">The perfect gift idea</p>
        </div>
      </div>
      <div className="box flex items-center justify-start border border-gray-300 p-4 w-full rounded-full space-x-3">
        <div className="img text-5xl text-green-300">
          <RiExchangeFundsLine />
        </div>
        <div className="para flex items-centerr justify-center flex-col">
          <h1 className="font-semibold">Return & exchange</h1>
          <p className="opacity-60">Free returns within 3 days</p>
        </div>
      </div>
      <div className="box flex items-center justify-start border border-gray-300 p-4 w-full rounded-full space-x-3">
        <div className="img text-5xl text-green-300">
          <IoCallOutline />
        </div>
        <div className="para flex items-centerr justify-center flex-col">
          <h1 className="font-semibold">Support 24 / 7</h1>
          <p className="opacity-60">Customer support</p>
        </div>
      </div>
    </div>
  );
};

export default AfterFeaturedProd;
