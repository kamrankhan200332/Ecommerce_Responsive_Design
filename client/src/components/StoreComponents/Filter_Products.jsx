import React from "react";
import { IoIosSearch } from "react-icons/io";
import img from "../../assets/images/storeImages/img41.jpg";
const Filter_Products = () => {
  return (
    <div>
      <div className="Filter_Products">
        <div className="filter w-[25%] bg-gray-200k borderr space-y-10">
          <div className="input relative">
            <input
              type="text"
              className="border py-2 px-3 w-full"
              placeholder="Search product..."
            />
            <div className="icon absolute top-3 right-3 text-xl">
              <IoIosSearch />
            </div>
          </div>
          <div className="prod space-y-5">
            <h1 className=" font-semibold">PRODUCTS CATEGORIES</h1>
            <div className="space-y-10">
              <div className="filter space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="">Dried</label>
                  <span className="px-3 border rounded">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="">Vegetables</label>
                  <span className="px-3 border rounded">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="">Fruits</label>
                  <span className="px-3 border rounded">9</span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="">Juice</label>
                  <span className="px-3 border rounded">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="">Uncategorized</label>
                  <span className="px-3 border rounded">1</span>
                </div>
              </div>

              <div className="space-y-5">
                <h1 className="font-bold">FILTER BY PRICE</h1>
                <div className="space-y-3">
                  <div className="range">rang</div>
                  <div className="btn flex items-center justify-between">
                    <button className="bg-green-700 text-white py-1 px-4 font-semibold rounded-full flex items-center justify-center">
                      FILTER
                    </button>
                    <span>Price: $0 - $50</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h1 className="font-semibold">TOP RATE</h1>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <div className="img">
                      <img
                        src={img}
                        alt="image"
                        className="object-cover h-[75px] w-[75px]"
                      />
                    </div>
                    <div className="para flex flex-col">
                      <span>Vitamin C face wash</span>
                      <span className="font-semibold">21.00$</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="img ">
                      <img
                        src={img}
                        alt="image"
                        className="object-cover h-[75px] w-[75px]"
                      />
                    </div>
                    <div className="para flex flex-col">
                      <span>Vitamin C face wash</span>
                      <span className="font-semibold">21.00$</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="img ">
                      <img
                        src={img}
                        alt="image"
                        className="object-cover h-[75px] w-[75px]"
                      />
                    </div>
                    <div className="para flex flex-col">
                      <span>Vitamin C face wash</span>
                      <span className="font-semibold">21.00$</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="img ">
                      <img
                        src={img}
                        alt="image"
                        className="object-cover h-[75px] w-[75px]"
                      />
                    </div>
                    <div className="para flex flex-col">
                      <span>Vitamin C face wash</span>
                      <span className="font-semibold">21.00$</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="img ">
                      <img
                        src={img}
                        alt="image"
                        className="object-cover h-[75px] w-[75px]"
                      />
                    </div>
                    <div className="para flex flex-col">
                      <span>Vitamin C face wash</span>
                      <span className="font-semibold">21.00$</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h1 className="font-semibold">PRODUCT TAGS</h1>
                <div className="flex items-center flex-wrap gap-2">
                  <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                    Plant
                  </span>
                  <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                    Floor
                  </span>
                  <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                    Indoor
                  </span>
                  <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                    Green
                  </span>
                  <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                    Healthy
                  </span>
                  <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                    Cactus
                  </span>
                  <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                    House Plant
                  </span>
                  <span className="py-1 px-3 flex items-center justify-center border border-gray-300 rounded-full">
                    Office tree
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products"></div>
      </div>
    </div>
  );
};

export default Filter_Products;
