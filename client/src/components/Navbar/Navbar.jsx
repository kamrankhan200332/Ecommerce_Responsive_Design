import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const isAuthenticated = false;
  const [showAuthentication, setShowAuthentication] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [navLinks, setNavLinks] = useState("/");
  const location = useLocation();

  return (
    <div className=" sticky top-0 left-0 z-50">
      <header className="bg-gray-200 py-2">
        <nav className="flex justify-between items-center w-[90%] mx-auto h-[80px] ">
          <Link to={"/"} onClick={() => setNavLinks("/")}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div
            className={`absolute md:static bg-gray-200 z-10 left-0 w-full min-h-[50vh] md:min-h-fit md:w-auto ${
              openMenu ? "top-[100%]" : "-top-[350%]"
            } transition-all duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row px-9 md:items-center gap-6 pt-3 md:pt-0 font-semibold mt-3 uppercase">
              <li>
                <Link
                  to={"/"}
                  className={`hover:text-green-700 duration-200 ${
                    location.pathname === "/" &&
                    "text-white hover:text-white rounded  py-1  px-2 bg-green-800 "
                  }`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/store"}
                  className={`hover:text-green-700 duration-200 ${
                    location.pathname === "/store" &&
                    "text-white hover:text-white rounded py-1  px-2 bg-green-800"
                  }`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={`hover:text-green-700 duration-200 ${
                    location.pathname === "/about" &&
                    "text-white hover:text-white  rounded  py-1  px-2 bg-green-800"
                  }`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to={"/blog"}
                  className={`hover:text-green-700 duration-200 ${
                    location.pathname === "/blog" &&
                    "text-white hover:text-white  rounded  py-1  px-2 bg-green-800"
                  }`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/page"}
                  className={`hover:text-green-700 duration-200 ${
                    location.pathname === "/page" &&
                    "text-white hover:text-white  rounded  py-1  px-2 bg-green-800"
                  }`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  Page
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={`hover:text-green-700 duration-200 ${
                    location.pathname === "/contact" &&
                    "text-white hover:text-white  rounded  py-1  px-2 bg-green-800"
                  }`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-10 ">
            <div
              className="burger flex text-xl cursor-pointer md:hidden"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <IoMdClose /> : <RxHamburgerMenu />}
            </div>
            <div className="cart flex items-center space-x-6">
              <span>
                <div className="icon cursor-pointer text-xl">
                  <span
                    className="hover:text-green-700 relative"
                    onClick={() => setShowAuthentication(!showAuthentication)}
                  >
                    <PiUserCircleLight />
                    {showAuthentication && (
                      <div>
                        {isAuthenticated ? (
                          <div className="absolute right-0 top-7 w-[100px] borderk h-[100px] flex flex-col space-y-1 z-10">
                            <Link
                              to={"/logout"}
                              className="bg-red-700 text-white font-medium py-1 text-center hover:bg-red-800 rounded cursor-pointer"
                            >
                              Log Out
                            </Link>
                          </div>
                        ) : (
                          <div className="absolute right-0 top-7 w-[100px] borderk h-[100px] flex flex-col space-y-1 z-10">
                            <Link
                              to={"/signup"}
                              className="bg-blue-700 text-white font-medium py-1 text-center hover:bg-blue-800 rounded cursor-pointer"
                            >
                              Sign Up
                            </Link>
                            <Link
                              to={"/login"}
                              className="bg-blue-700 text-white font-medium py-1 text-center hover:bg-blue-800 rounded cursor-pointer"
                            >
                              Log In
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </span>
                </div>
              </span>
              <span>
                <div className="icon cursor-pointer text-xl">
                  <span className="hover:text-green-700">
                    <CiHeart />
                  </span>
                </div>
              </span>
              <span>
                <div className="icon cursor-pointer text-xl">
                  <span className="hover:text-green-700">
                    <PiShoppingCartLight />
                  </span>
                </div>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
