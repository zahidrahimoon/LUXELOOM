import React from "react";
import PageHeader from "../Components/PageHeader";
import Navbar from "../Components/Navbar";
import  contactheader from "../assets/PageHeaderImages/contactheader.jpg"
import Footer from "../Components/Footer";
import ContactDetails from "../Components/ContactDetails";
import ContactForm from "../Components/ContactForm";

const ContactUs= () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={contactheader}
        title="Contact Us"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
       <ContactDetails />
       <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUs;
