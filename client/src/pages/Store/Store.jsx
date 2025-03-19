import React from 'react';
import Hero from '../../components/StoreComponents/Hero';
import Filter_Products from '../../components/StoreComponents/Filter_Products';

const Store = () => {
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div className="hero">
        <Hero />
      </div>
      <div className="filter_products">
        <Filter_Products />
      </div>
    </div>
  );
}

export default Store;
