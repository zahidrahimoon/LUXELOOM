import React from 'react';
import PeopleContainer from './PeopleContainer';

const ContactForm = () => {
  return (
    <section id="contact-form" className="section-p1">
      <div id="form-details" className="contact-form">
        <span>Leave a message</span>
        <h3>We'd Love to Hear From You</h3>
        <form id="contact-form">
          <input type="text" id="name" placeholder="Your Name" />
          <input type="email" id="email" placeholder="Your Email" />
          <textarea id="message" placeholder="Your Message" />
          <button id="submit-button" type="submit">Submit</button>
        </form>
      </div>
     <PeopleContainer />
    </section>
  );
};

export default ContactForm;
