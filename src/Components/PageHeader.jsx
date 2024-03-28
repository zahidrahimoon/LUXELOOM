import React from 'react';

const PageHeader = ({ backgroundImage, title, subtitle, buttonText }) => {
  return (
    <section
      id="Page-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto">
        <h2 data-aos="fade-up">
          {title}
        </h2>
        <p data-aos="fade-up">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
