import React from 'react';

const BannerBox = ({ title, subtitle, span, buttonText, buttonClassName, dataAos, bgImage }) => {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="banner-box" style={style} data-aos={dataAos}>
      <h3>{title}</h3>
      <h2>{subtitle}</h2>
      <span>{span}</span>
      {buttonText && <button className={buttonClassName}>{buttonText}</button>}
    </div>
  );
};

export default BannerBox;
