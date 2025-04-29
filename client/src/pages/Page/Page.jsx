import Hero from "../../components/CartComponent/Hero";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

import React, { useState } from "react";
import img from "../../assets/images/storeImages/img54.jpg";

const Page = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>

      <div>
        <div className="space-y-10">
          <div className="w-full overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 shadow-lg">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-4 text-left">PRODUCT</th>
                  <th className="p-4 text-left">PRICE</th>
                  <th className="p-4 text-left">QUANTITY</th>
                  <th className="p-4 text-left">TOTAL</th>
                  <th className="p-4 text-left">REMOVE</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-100 transition">
                  <td className="p-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
                    <img
                      src={img}
                      alt=""
                      className="w-[80px] h-[80px] object-cover rounded-md border"
                    />
                    <span className="font-semibold text-center md:text-left">
                      Pellentesque aliquet
                    </span>
                  </td>
                  <td className="p-4 text-gray-700 font-medium text-center md:text-left">
                    180.00 $
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2 justify-center md:justify-start">
                      <button
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
                        onClick={() => setCount(count > 1 ? count - 1 : count)}
                      >
                        ➖
                      </button>
                      <span className="px-4 py-1 border rounded">{count}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
                        onClick={() => setCount(count + 1)}
                      >
                        ➕
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700 font-medium text-center md:text-left">
                    180.00 $
                  </td>
                  <td className="p-4 text-center md:text-left">
                    <button className="text-red-600 hover:text-red-800 text-xl font-bold">
                      ×
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="font-bold">
                ADD NOTE
              </label>
              <textarea
                name=""
                id=""
                className="border border-gray-400 rounded p-3"
                placeholder="Leave your valuable comment..."
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between w-full md:w-[50%]">
                <h1 className="text-gray-700 font-bold">SUBTOTAL</h1>
                <p className="text-gray-700 font-bold">900.00 $</p>
              </div>
              <button className="py-3 px-5 border bg-green-700 text-white font-bold w-full md:w-[50%] rounded-full">
                Proceed to checkout
              </button>
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

export default Page;
