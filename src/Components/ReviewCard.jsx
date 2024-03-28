import React from 'react';

const ReviewCard = ({ imageSrc, name, description }) => {
  return (
    <div className="card swiper-slide">
      <div className="image-content">
        <span className="overlay"></span>
        <div className="card-image">
          <img src={imageSrc} className="card-img" alt={name} />
        </div>
      </div>
      <div className="card-content">
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <button className="button">View More</button>
      </div>
    </div>
  );
};

export default ReviewCard;
