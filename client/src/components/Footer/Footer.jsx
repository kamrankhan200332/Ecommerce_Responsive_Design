import React from "react";

const Footer = () => {
  return (
    <div className="[@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div className="footer grid grid-cols-4 gap-x-5">
        <div className="contact space-y-5 w-full borderk">
          <h1 className="font-bold">CONTACT US</h1>
          <div className="space-y-3">
            <div className="address">
              <span className="icon">icon</span>
              <span>Address: Warsak Road Hakeem Khan Kalay Peshawar.</span>
            </div>
            <div className="opacity-70">
              <span className="icon">icon</span>
              <span>Phone:(+92) 3119921465</span>
            </div>
            <div className="opacity-70">
              <span className="icon">icon</span>
              <span>Email: kamrankhan815.com@gmail.com</span>
            </div>
            <div className="socialLinks">
              <h1>Follow us:</h1>
              <div className="socialIcons">
                <span className="facebook">icon</span>
                <span className="twitter">icon</span>
                <span className="instagram">icon</span>
                <span className="linkedin">icon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="info space-y-5 borderk">
          <h1 className="font-bold">INFORMATION</h1>
          <div className="opacity-70 flex flex-col space-y-3">
            <span>New Products</span>
            <span>Top Sellers</span>
            <span>Our Blog</span>
            <span>About Our Shop</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="info space-y-5 borderk">
          <h1 className="font-bold">MY ACCOUNT</h1>
          <div className="opacity-70 flex flex-col space-y-3">
            <span>My Account</span>
            <span>Discount</span>
            <span>Orders history</span>
            <span>Personal information</span>
          </div>
        </div>
        <div className="popularProduct space-y-5 borderk">
          <h1 className="font-bold">POPULAR TAG</h1>
          <div className="opacity-70 space-y-3">
            <div className="box1 space-x-3 grid grid-cols-2">
              <span className="border border-slate-400 rounded-full py-1.5 px-5 flex items-center justify-center">
                Trend
              </span>
              <span className="border border-slate-400 rounded-full py-1.5 px-5 flex items-center justify-center">
                Decor
              </span>
            </div>
            <div className="box1 space-x-3 grid grid-cols-2">
              <span className="border border-slate-400 rounded-full py-1.5 px-5 flex items-center justify-center">
                Trend
              </span>
              <span className="border border-slate-400 rounded-full py-1.5 px-5 flex items-center justify-center">
                Decor
              </span>
            </div>
            <div className="box1 space-x-3 grid grid-cols-2">
              <span className="border border-slate-400 rounded-full py-1.5 px-5 flex items-center justify-center">
                Trend
              </span>
              <span className="border border-slate-400 rounded-full py-1.5 px-5 flex items-center justify-center">
                Decor
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
