import React from 'react';
import aboutbanner from '../assets/AboutImages/aboutbanner1.jpg'

const AboutBanner = () => {
  return (
    <section id="about-head" className="section-p1" data-aos="zoom-in">
      <img src={aboutbanner} alt="Image Description" />
      <div>
        <h2>Who We Are</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et cumque sapiente, ducimus
          earum nisi distinctio, deleniti reprehenderit harum porro optio ipsum pariatur. Dolore
          quis quidem saepe sunt! Nesciunt, ducimus consequuntur.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ratione inventore, dolorum, illo deleniti natus corrupti
          quod enim rem deserunt culpa qui nobis cumque corporis voluptas explicabo sunt impedit
          facere vitae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut
          dolorem quam, molestias facilis maxime, dolor atque libero deleniti doloremque sapiente
          impedit adipisci sit quia, laboriosam omnis! Consequatur, tenetur officiis.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Pariatur eveniet corporis dolorum
          voluptate, doloremque consectetur cupiditate ducimus ea? Error voluptatem laborum veniam
          harum aliquam laudantium corporis quae accusantium dicta reiciendis!Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Rem placeat quaerat vel eligendi officia amet quia
          sit corporis consequuntur quidem dolores eveniet veniam eius error natus, obcaecati hic
          nulla quasi. Magni neque id cumque maxime voluptatem ipsum laborum, sit, quisquam incidunt
          distinctio reprehenderit doloribus, blanditiis libero voluptas! At hic dolor recusandae
          laudantium quia cumque reiciendis unde. Placeat explicabo quod tempore.
        </p>
        <abbr
          title="Create Stunning images with much or as little control as you like thanks to the choice of Basic and Creative modes"
        >
          Create Stunning images with much or as little control as you like thanks to the choice of
          Basic and Creative modes
        </abbr>
        <br />
        <br />
        <marquee
          behavior="scroll"
          direction="left"
          bgcolor="grey"
          color="red"
          loop="infinite"
          scrollamount="5"
          width="100%"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error amet corrupti alias
          eveniet quod accusantium? Maxime, architecto soluta aut assumenda ea consequatur dolorum
          ab exercitationem eveniet fuga nihil recusandae optio!
        </marquee>
      </div>
    </section>
  );
};

export default AboutBanner;
