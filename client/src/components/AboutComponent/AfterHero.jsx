import React from "react";
import img from "../../assets/images/storeImages/img80.jpg";

const AfterHero = () => {
  return (
    <div>
      <div className="flex-col flex md:flex-row gap-10">
        <div className="w-full md:w-[50%] space-y-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold font-['Playfair_Display'] relative after:block after:content-[''] after:w-[100px] after:mt-4 after:h-[3px] after:bg-green-500 ">
            A Minimal Team <br /> For a Better World
          </h1>
          <p className="text-justify">
            Lorem Khaled Ipsum is a major key to success. The ladies always say
            Khaled you smell good, I use no cologne. Cocoa butter is the key. To
            succeed you must believe. When you believe, you will succeed. They
            will try to close the door on you, just open it. The key is to drink
            coconut, fresh coconut, trust me. It’s important to use cocoa
            butter. It’s the key to more success, why not live smooth?
          </p>
        </div>
        <div className="image w-full md:w-[50%]">
          <img src={img} className="object-cover w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AfterHero;
