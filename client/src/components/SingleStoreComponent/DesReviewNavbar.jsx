import React, { useState } from "react";
import { Link } from "react-router-dom";
import Description from "./Description";
import Review from "./Review";

const DesReviewNavbar = () => {
  const [description, setDescription] = useState(true);
  const [review, setReview] = useState(false);
  return (
    <div className="space-y-">
      <div className="flex items-center justify-center font-['Playfair_Display'] gap-7 text-4xl font-bold py-8">
        <button
          onClick={() => {
            setDescription(true);
            setReview(false);
          }}
          className={`${description && "text-green-700"}`}
        >
          Description
        </button>
        <button
          onClick={() => {
            setDescription(false);
            setReview(true);
          }}
          className={`${review && "text-green-700"}`}
        >
          Reviews
        </button>
      </div>
      {description && <Description />}
      {review && <Review />}
    </div>
  );
};

export default DesReviewNavbar;
