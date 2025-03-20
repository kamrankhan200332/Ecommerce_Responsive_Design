import React from 'react';
import Hero from '../../components/StoreComponents/Hero';
import Filter_Products from '../../components/StoreComponents/Filter_Products';
import ImageSection from '../../components/StoreComponents/ImageSection';

const Store = () => {
  return (
    <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
      <div className="hero">
        <Hero />
      </div>
      <div className="filter_products [@media(min-width:480px)_and_(max-width:990px)]:mx-[70px]">
        <Filter_Products />
      </div>
      <div className="imageSection [@media(min-width:480px)_and_(max-width:990px)]:mx-[70px]">
        <ImageSection />
      </div>
    </div>
  );
}

export default Store;
