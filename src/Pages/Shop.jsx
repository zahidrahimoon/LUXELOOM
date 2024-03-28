import React from "react";
import Footer from "../Components/Footer";
import Product1 from "../Components/Product1";
import Product2 from "../Components/Product1";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import  shopheader from "../assets/PageHeaderImages/shopheader.jpg"
import Pagination from "../Components/Pagination";

const Shop = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={shopheader}
        title="Shop At Home"
        subtitle="Save more with coupons & upto 70% off"
        buttonText="Shop Now"
      />
      <Product1 heading="Featured " spanText="Products" paragraph="New Fashion Design which suites you " />
      <Product2 />
      <Pagination />
      <Footer />
    </>
  );
};

export default Shop;
