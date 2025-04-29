import Hero from "../../components/BlogComponent/Hero";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import img1 from "../../assets/images/storeImages/img69.jpg";
import img2 from "../../assets/images/storeImages/img70.jpg";
import img3 from "../../assets/images/storeImages/img71.jpg";

const Blog = () => {
  const [hoverToShowProdIcon, setHoverToShowProdIcon] = useState(null);
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>

      <div>
        <div className="">
          <div className="Filter_Products flex gap-8 gap-y-13 [@media(max-width:990px)]:flex-col-reverse ">
            <div className="filter [@media(max-width:990px)]:w-full w-[25%] bg-gray-200k space-y-6">
              <div className="space-y-3">
                <h1 className=" font-semibold">SEARCH</h1>
                <div className="input relative opacity-70">
                  <input
                    type="text"
                    className="border py-2 px-3 w-full border-gray-300"
                    placeholder="Search product..."
                  />
                  <div className="icon absolute top-3 right-3 text-xl">
                    <IoIosSearch />
                  </div>
                </div>
              </div>

              <div className="prod space-y-2">
                <h1 className=" font-semibold">RECENT POSTS</h1>
                <div className="space-y-6 opacity-70">
                  <div className="filter divide-y divide-gray-400">
                    <p className="flex items-center py-3">Blog image post</p>
                    <p className="flex items-center py-3">Post with Gallery</p>
                    <p className="flex items-center py-3">Post with Audio</p>
                    <p className="flex items-center py-3">Post with Video</p>
                    <p className="flex items-center py-3 border border-b-gray-400 border-t-0 border-r-0 border-l-0">
                      Maecenas ultricies
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h1 className="font-bold">RECENT COMMENTS</h1>
                    <div className="filter divide-y divide-gray-400">
                      <p className="flex items-center py-3">
                        Admin on Vivamus blandit
                      </p>
                      <p className="flex items-center py-3">
                        Admin on Vivamus blandit
                      </p>
                      <p className="flex items-center py-3">
                        Admin on Vivamus blandit
                      </p>
                      <p className="flex items-center py-3">
                        Admin on Vivamus blandit
                      </p>
                      <p className="flex items-center py-3 border border-b-gray-400 border-t-0 border-r-0 border-l-0">
                        Admin on Vivamus blandit
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h1 className="font-bold">ARCHIVES</h1>
                    <div className="filter">
                      <p className="flex items-center py-2">January 2025</p>
                      <p className="flex items-center py-2">February 2025</p>
                      <p className="flex items-center py-2">March 2025</p>
                      <p className="flex items-center py-2">April 2025</p>
                      <p className="flex items-center py-2">May 2025</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h1 className="font-bold">CATEGORIES</h1>
                    <div className="filter">
                      <p className="flex items-center py-2">Creative</p>
                      <p className="flex items-center py-2">Fashion</p>
                      <p className="flex items-center py-2">Image</p>
                      <p className="flex items-center py-2">Photography</p>
                      <p className="flex items-center py-2">Travel</p>
                      <p className="flex items-center py-2">Videos</p>
                      <p className="flex items-center py-2">WordPress</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h1 className="font-bold">META</h1>
                    <div className="filter">
                      <p className="flex items-center py-2">Log in</p>
                      <p className="flex items-center py-2">Entries RSS</p>
                      <p className="flex items-center py-2">Comments RSS</p>
                      <p className="flex items-center py-2">WordPress.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="products w-[75%] [@media(max-width:990px)]:w-full  space-y-10">
              <div className=" space-y-6">
                <div className="img">
                  <img src={img1} alt="" />
                </div>

                <div className="flex gap-7">
                  <div className="bg-green-700 w-[80px] h-[80px] text-white flex items-center justify-center py-4k px-7">
                    <div className="flex flex-col">
                      <span className="font-bold">20</span>
                      <span>SEP</span>
                    </div>
                  </div>

                  <div>
                    <div className="border border-gray-400 border-t-0 border-r-0 border-l-0 w-full pb-8">
                      <h1 className="font-semibold">
                        Aptent taciti soci litora cianpen
                      </h1>
                      <span className="text-gray-500 text-sm">
                        Post by: Prof Dr. Ali Ahmad
                      </span>
                    </div>
                    <p className="text-gray-500 pt-2">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout...
                    </p>
                  </div>
                </div>
              </div>

              <div className=" space-y-6">
                <div className="img">
                  <img src={img2} alt="" />
                </div>

                <div className="flex gap-7">
                  <div className="bg-green-700 w-[80px] h-[80px] text-white flex items-center justify-center py-4k px-7">
                    <div className="flex flex-col">
                      <span className="font-bold">20</span>
                      <span>SEP</span>
                    </div>
                  </div>

                  <div>
                    <div className="border border-gray-400 border-t-0 border-r-0 border-l-0 w-full pb-8">
                      <h1 className="font-semibold">
                        Aptent taciti soci litora cianpen
                      </h1>
                      <span className="text-gray-500 text-sm">
                        Post by: Prof Dr. Ali Ahmad
                      </span>
                    </div>
                    <p className="text-gray-500 pt-2">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout...
                    </p>
                  </div>
                </div>
              </div>

              <div className=" space-y-6">
                <div className="img">
                  <img src={img3} alt="" />
                </div>

                <div className="flex gap-7">
                  <div className="bg-green-700 w-[80px] h-[80px] text-white flex items-center justify-center py-4k px-7">
                    <div className="flex flex-col">
                      <span className="font-bold">20</span>
                      <span>SEP</span>
                    </div>
                  </div>

                  <div>
                    <div className="border border-gray-400 border-t-0 border-r-0 border-l-0 w-full pb-8">
                      <h1 className="font-semibold">
                        Aptent taciti soci litora cianpen
                      </h1>
                      <span className="text-gray-500 text-sm">
                        Post by: Prof Dr. Ali Ahmad
                      </span>
                    </div>
                    <p className="text-gray-500 pt-2">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout...
                    </p>
                  </div>
                </div>
              </div>
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

export default Blog;
