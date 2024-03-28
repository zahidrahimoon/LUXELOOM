import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes} from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import  logo1 from '../assets/LOGOS/png/LOGO1.png'



const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <section id="header">
     <img src={logo1} alt="RAHI" className="logo" />
      <div className={`navbar ${isNavOpen ? 'active' : ''}`}>
        <ul>
          <li><NavLink exact activeClassName="active" to="/" onClick={closeNav}>Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/shop" onClick={closeNav}>Shop</NavLink></li>
          <li><NavLink activeClassName="active" to="/blog" onClick={closeNav}>Blog</NavLink></li>
          <li><NavLink activeClassName="active" to="/about" onClick={closeNav}>About</NavLink></li>
          <li><NavLink activeClassName="active" to="/contactUs" onClick={closeNav}>Contact Us</NavLink></li>
        </ul>
        <Link to="#" id="close" onClick={toggleBar}><FaTimes /></Link>
      </div>
      <div id="mobile">
        <IoMdMenu id='Bar' onClick={toggleBar} className='bars' />
      </div>
    </section>
  );
};

export default Navbar;
