import React from "react";
import PageHeader from "../Components/PageHeader";
import Navbar from "../Components/Navbar";
import  contactheader from "../assets/PageHeaderImages/3.png"
import Footer from "../Components/Footer";
import ContactDetails from "../Components/ContactDetails";
import ContactForm from "../Components/ContactForm";

const ContactUs= () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={contactheader}
      />
       <ContactDetails />
       <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUs;
