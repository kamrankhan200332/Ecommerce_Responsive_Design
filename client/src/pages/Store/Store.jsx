import React from 'react';
import Hero from '../../components/StoreComponents/Hero';

const Store = () => {
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
}

export default Store;
