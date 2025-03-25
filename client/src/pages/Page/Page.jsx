import React from 'react';
import Hero from '../../components/CartComponent/Hero';
import Cart from '../../components/CartComponent/Cart';
import NewsLetter from '../../components/NewsLetter/NewsLetter';

const Page = () => {
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div>
        <Hero />
      </div>
      <div>
        <Cart />
      </div>
      <div>
       <NewsLetter />
      </div>
    </div>
  );
}

export default Page;
