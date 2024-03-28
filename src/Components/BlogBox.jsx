import React from 'react';

const BlogBox = ({ imgSrc, date }) => {
  return (
    <div className="blog-box" data-aos="zoom-out">
      <div className="blog-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="blog-details">
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, libero.</p>
        <a href="#">Continue Reading</a>
      </div>
      <h1>{date}</h1>
    </div>
  );
};
export default BlogBox;