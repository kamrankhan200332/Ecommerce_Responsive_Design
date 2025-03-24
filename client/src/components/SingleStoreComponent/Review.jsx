import React from "react";

const Review = () => {
  return (
    <div className="space-y-5 flex flex-col">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">Write Your Own Review</h1>
        <h2>
          You're reviewing: <span className="text-green-700">Shirt 1</span>
        </h2>
      </div>

      <div className="flex flex-col w-full md:flex-row space-x-5">
        {/* Left Section */}
        <div className="w-full xl:w-[50%] space-y-3">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="py-3 px-5 w-full border rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              placeholder="Enter your summary..."
              className="py-3 px-5 w-full border rounded-full"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full xl:w-[50%]">
          <div className="flex flex-col space-y-2">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              cols="10"
              rows="5"
              className="py-3 px-5 w-full border rounded-xl"
              placeholder="Enter your feedback..."
            ></textarea>
          </div>
        </div>
      </div>
      <button className="py-2 px-4 w-[160px] cursor-pointer bg-black text-white font-bold rounded-full hover:bg-green-700 duration-500 my-3">
        Submit Review
      </button>
      <h1 className="text-xl font-semibold my-2 mb-4">People Review (1)</h1>

      <div className="flex items-center gap-3">
        <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center font-semibold bg-green-700 text-white">
          K
        </div>
        <div className="w-[90%]">
          <h1 className="text-xl font-semibold">Kamran Khan</h1>
          <p>Mon March 24 2025</p>
          <p>This product has lots of features that help me.</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
