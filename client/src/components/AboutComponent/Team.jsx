import React from "react";
import lineRose from "../../assets/images/lineRose.png";
import img1 from "../../assets/images/storeImages/kamran.jpg";
import img2 from "../../assets/images/storeImages/ali ahmad.jpg";
import img3 from "../../assets/images/storeImages/prof ali ahmad.jpg";

const Team = () => {
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

      <div className="grid grid-cols-3 gap-5">
        <div className="image w-full space-y-3">
          <div className="img">
            <img src={img2} alt="" className="h-[400px] object-cover w-full" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">PROF ALI AHMAD</h1>
            <p className="opacity-60">Mathematician</p>
          </div>
        </div>

        <div className="image w-full  space-y-3">
          <div className="img">
            <img src={img1} alt="" className="h-[400px] object-cover w-full" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">KAMRAN KHAN</h1>
            <p className="opacity-60">Web Developer & CEO</p>
          </div>
        </div>

        <div className="image w-full  space-y-3">
          <div className="img">
            <img src={img3} alt="" className="h-[400px] object-cover w-full" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">PROF DR. ALI AHMAD</h1>
            <p className="opacity-60">Chief of Marketing Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
