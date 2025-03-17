import React from "react";
import img1 from "../../assets/images/ad1.jpg";
import img2 from "../../assets/images/ad2.jpg";

const ImageSection = () => {
  return (
    <div>
      <div className="images grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="image1 w-full">
          <img src={img1} className="object-cover w-full" alt="img1" />
        </div>
        <div className="image2 w-full">
          <img src={img2} className=" object-cover w-full" alt="img2" />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
