import React from "react";

const InputSection = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center flex-col space-y-5 text-center">
        <h1 className="font-['Playfair_Display'] text-4xl font-semibold">
          Get In Touch
        </h1>
        <p className="opacity-60">
          Lorem ipsum dolor consectetuer adipiscing elit sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna <br /> aliquam erat
          volutpatcommodo consequat.veniet quis?
        </p>
      </div>

      <div className="input space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <input
              type="text"
              className="border border-gray-300 py-3 px-4 w-full rounded"
              placeholder="Your name..."
            />
          </div>
          <div>
            <input
              type="text"
              className="border border-gray-300 py-3 px-4 w-full rounded"
              placeholder="Your email..."
            />
          </div>
          <div>
            <input
              type="text"
              className="border border-gray-300 py-3 px-4 w-full rounded"
              placeholder="Your contact..."
            />
          </div>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Message..."
          className="border border-gray-300 py-3 px-4 w-full rounded"
        ></textarea>
        <div className=" flex items-center justify-center">
          <button className="bg-green-700 text-white hover:bg-green-800 font-bold cursor-pointer py-3 px-8 flex items-center justify-center rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
