import React from 'react';
import ProductItems from './ProductItems';
import image1 from '../assets/ProductsImages/product1.jpg'
import image2 from '../assets/ProductsImages/product2.jpg'
import image3 from '../assets/ProductsImages/product3.jpg'
import image4 from '../assets/ProductsImages/product4.jpg'
const Product1 = ({ heading, spanText , paragraph }) => {
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
            brandName="Brand 1"
            suitName="Suit 1"
            imageSrc={image1}
            price="78"
          />
          <ProductItems
            brandName="Brand 2"
            suitName="Suit 2"
            imageSrc={image2}
            price="78"
          />
          <ProductItems
            brandName="Brand 2"
            suitName="Suit 2"
            imageSrc={image3}
            price="78"
          />
          <ProductItems
            brandName="Brand 2"
            suitName="Suit 2"
            imageSrc={image4}
            price="78"
          />
        </div>
      </section>
    </section>
  );
};

export default Product1;
