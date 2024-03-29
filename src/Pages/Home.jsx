import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import HomeBannerOne from '../Components/HomeBannerOne'
import HomeBannerTwo from '../Components/HomeBannerTwo'
import HomeBannerThree from '../Components/HomeBannerThree'
import Footer from '../Components/Footer'
import Product1 from '../Components/Product1'
import Product2 from '../Components/Product2'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Product1 heading="Featured " spanText="Products" paragraph="Summer Collection New Modern Design"/>
    <HomeBannerOne />
    <Product2 heading="Modern" spanText="Designs"   paragraph="According to your desires"/>
    <HomeBannerTwo />
    <HomeBannerThree />
    <Footer />
    </>
  )
}

export default Home;