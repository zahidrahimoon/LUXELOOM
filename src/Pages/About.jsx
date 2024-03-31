import React from "react";
import PageHeader from "../Components/PageHeader";
import Navbar from "../Components/Navbar";
import  aboutheader from "../assets/PageHeaderImages/about.png";
import Footer from "../Components/Footer";
import AboutBanner from "../Components/AboutBanner";
import Reviews from "../Components/Reviews";

const About = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={aboutheader}
      />
      <AboutBanner />
      <Reviews />
      <Footer />
    </>
  );
};

export default About;
