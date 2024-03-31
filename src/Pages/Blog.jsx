import React from "react";
import PageHeader from "../Components/PageHeader";
import Navbar from "../Components/Navbar";
import  blogheader from "../assets/PageHeaderImages/5.png";
import BlogBanner from "../Components/BlogBanner";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={blogheader}
      />
      <BlogBanner />
      <Pagination />
      <Footer />
    </>
  );
};

export default Blog;
