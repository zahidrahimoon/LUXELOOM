import React, { useEffect, useState } from "react";
import { AiFillCaretUp  } from 'react-icons/ai'


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`back-top-btn ${isVisible ? "active" : ""}`}
      aria-label="back to top"
      onClick={scrollToTop}
    >
    < AiFillCaretUp  />
    </button>
  );
};

export default BackToTopButton;
