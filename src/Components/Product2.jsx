import React from 'react';
import ProductItems from './ProductItems';
import image5 from '../assets/ProductsImages/product5.jpg';
import image6 from '../assets/ProductsImages/product6.jpg';
import image7 from '../assets/ProductsImages/product7.jpg';
import image8 from '../assets/ProductsImages/product8.jpg';
const Product2 = ({ heading, spanText , paragraph }) => {
  return (
    <section id="product1">
      <section id="section-p1">
        <h2 data-aos="fade-right">
          {heading} <span>{spanText}</span>
        </h2>
        <p data-aos="fade-right" data-aos-offset="100">
          {paragraph}
        </p>
        <div className="pro-container">
          <ProductItems
            brandName="Brand 2"
            suitName="Suit 2"
            imageSrc={image5}
            price="78"
          />
          <ProductItems
            brandName="Brand 2"
            suitName="Suit 2"
            imageSrc={image6}
            price="78"
          />
          <ProductItems
            brandName="Brand 2"
            suitName="Suit 2"
            imageSrc={image7}
            price="78"
          />
          <ProductItems
            brandName="Brand 2"
            suitName="Suit 2"
            imageSrc={image8}
            price="78"
          />
        </div>
      </section>
    </section>
  );
};

export default Product2;
