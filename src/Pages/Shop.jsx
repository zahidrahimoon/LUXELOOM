import React from "react";
import Footer from "../Components/Footer";
import Product1 from "../Components/Product1";
import Product2 from "../Components/Product1";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import  shopheader from "../assets/PageHeaderImages/1.png";
import Pagination from "../Components/Pagination";

const Shop = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={shopheader}
      />
      <Product1 heading="Featured " spanText="Products" paragraph="New Fashion Design which suites you " />
      <Product2 />
      <Pagination />
      <Footer />
    </>
  );
};

export default Shop;
