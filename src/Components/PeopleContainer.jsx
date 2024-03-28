import React from 'react';
import contact1 from '../assets/ContactUsImages/contactus1.avif';
import contact2 from '../assets/ContactUsImages/contactus2.avif';
import contact3 from '../assets/ContactUsImages/contactus3.avif';

const PeopleContainer = () => {
  return (
    <div className="people-container">
    <h1>Our Team</h1>
    <div className="people">
      <img src={contact3} alt="John Doe" />
      <p><span>John Doe</span> Senior Marketing Manager <br /> Phone:+1 234 567 890 <br /> E-mail: JohnDoe@gmail.com</p>
    </div>
    <div className="people">
      <img src={contact2} alt="Anaa" />
      <p><span>Anaa</span> Junior Marketing Manager <br /> Phone:+1 243 509 867 <br /> E-mail: AnaaMasih@gmail.com</p>
    </div>
    <div className="people">
      <img src={contact1} alt="Ellie" />
      <p><span>Ellie</span>Advisor<br /> Phone:+1 324 765 909 <br /> E-mail: EllieJohn@gmail.com</p>
    </div>
  </div>
  )
}

export default PeopleContainer