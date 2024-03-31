import React from "react";
import  banner1  from '../assets/BannersImages/bn2.png';
import  banner2  from '../assets/BannersImages/bn4.png';
import  banner3  from '../assets/BannersImages/bn5.png';
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
