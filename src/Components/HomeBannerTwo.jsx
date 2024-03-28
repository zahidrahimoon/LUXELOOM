import React from 'react';
import BannerBox from './BannerBox';
import bna3 from '../assets/BannersImages/bna3.jpg'
import bna4 from '../assets/BannersImages/bna4.jpg'

const HomeBannerTwo = () => {
  return (
    <section id="sm-banner" className="section-p1 section-m1">
      <BannerBox
        title="Crazy Deals"
        subtitle="Buy 1 get 1 Free"
        buttonText="Learn More"
        dataAos="zoom-in-right"
        span="The best classic dress is on sale at Rahi."
        bgImage={bna3}
      />
      <BannerBox
        title="Spring/Summer"
        subtitle="Upcoming Season"
        buttonText="Collection"
        buttonClassName="button"
        dataAos="zoom-in-left"
        span="The best classic dress is on sale at Rahi."
        bgImage={bna4}
      />
    </section>
  );
};

export default HomeBannerTwo;
