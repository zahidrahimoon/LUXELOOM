import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <section id="contact-details" className="section-p1">
      <div className="details">
        <span>Get in touch</span>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque unde vero!</h2>
        <div>
          <FaMapMarkerAlt className="i fal fa-map" />
          <p> Al-Karam Studio LuckyOne</p>
        </div>
        
        <div>
          <FaEnvelope className="i far fa-envelope" />
          <p>info@example.com</p>
        </div>
        
        <div>
          <FaPhoneAlt className="i far fa-phone-alt" />
          <p>+1 234 567 890</p>
        </div>
        
        <div>
          <FaClock className="i far fa-clock" />
          <p>Monday - Saturaday: 11:00 AM - 2:00 PM</p>
        </div>
      </div>
      <div className="i map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14471.99057347296!2d67.0682739871582!3d24.9321502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4e2375278b%3A0x8f54a569b216cea0!2sAlKaram%20Studio%20-%20LuckyOne!5e0!3m2!1sen!2s!4v1703818297485!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default ContactDetails;
