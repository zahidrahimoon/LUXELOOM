import React from "react";
import  banner1  from '../assets/BannersImages/banner3.1.jpg';
import  banner2  from '../assets/BannersImages/banner3.2.jpg';
import  banner3  from '../assets/BannersImages/banner3.3.jpg';
import BannerBox from "./BannerBox";

const HomeBannerThree = () => {
    return (
      <section id="banner-3" className="banner-3">
        <BannerBox
          title="Seasonal Scale"
          subtitle="Winter Collection"
          dataAos="zoom-out-right"
          bgImage={banner1}
          />
        <BannerBox
          title="New Footwear Collection"
          subtitle="Spring/Summer 2024"
          dataAos="zoom-out-right"
          bgImage={banner2}
          />
        <BannerBox
          title="T-SHIRTS"
          subtitle="New Trending Prints"
          dataAos="zoom-out-left"
          bgImage={banner3}
        />
      </section>
    );
  };
  
  export default HomeBannerThree;
