import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductItems = ({ brandName, suitName, imageSrc, price }) => {
  return (
    <div className="pro" data-aos="flip-left" data-aos-offset="100" data-aos-delay="100">
      <img src={imageSrc} alt={suitName} />
      <div className="des">
        <span>{brandName}</span>
        <h5>{suitName}</h5>
      </div>
      <div className="star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <h4>${price}</h4>
      </div>
      <a href="#"><FaShoppingCart className="cart" /></a>
    </div>
  );
};

export default ProductItems;
