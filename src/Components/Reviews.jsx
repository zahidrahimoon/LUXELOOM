import { Swiper, SwiperSlide } from "swiper/react";
import review1 from '../assets/ReviewsImages/pic1.webp'
import review2 from '../assets/ReviewsImages/pic2.webp'
import review3 from '../assets/ReviewsImages/pic3.webp'
import review4 from '../assets/ReviewsImages/pic4.webp'
import review5 from '../assets/ReviewsImages/pic5.webp'
import review6 from '../assets/ReviewsImages/pic6.jpg'
import review7 from '../assets/ReviewsImages/pic7.jpg'

import "swiper/css";
import ReviewCard from "./ReviewCard";

const Reviews=() => {
  return (
    <>
    <h1 className="review">Reviews</h1>
    <Swiper
    spaceBetween={30}
    slidesPerView={5}
    breakpoints={{
      250 :{
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 5,
      },
    }}
  >
        <div className="swiper-slide-container">
    <div className="card-wrapper swiper-container">
          <SwiperSlide>
            <ReviewCard imageSrc={review1} name = "John Doe" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nulla provident eos molestiae accusamus, sed ea minima. Neque sequi necessitatibus ullam maxime. Commodi, debitis iste? Nobis dolor nisi magnam!"/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard imageSrc={review2}  name = "John Doe" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nulla provident eos molestiae accusamus, sed ea minima. Neque sequi necessitatibus ullam maxime. Commodi, debitis iste? Nobis dolor nisi magnam!" />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard  imageSrc={review3}  name = "John Doe" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nulla provident eos molestiae accusamus, sed ea minima. Neque sequi necessitatibus ullam maxime. Commodi, debitis iste? Nobis dolor nisi magnam!"/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard  imageSrc={review4}  name = "John Doe" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nulla provident eos molestiae accusamus, sed ea minima. Neque sequi necessitatibus ullam maxime. Commodi, debitis iste? Nobis dolor nisi magnam!"/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard  imageSrc={review5}  name = "John Doe" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nulla provident eos molestiae accusamus, sed ea minima. Neque sequi necessitatibus ullam maxime. Commodi, debitis iste? Nobis dolor nisi magnam!"/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard  imageSrc={review6}  name = "John Doe" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nulla provident eos molestiae accusamus, sed ea minima. Neque sequi necessitatibus ullam maxime. Commodi, debitis iste? Nobis dolor nisi magnam!"/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard  imageSrc={review7}  name = "John Doe" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nulla provident eos molestiae accusamus, sed ea minima. Neque sequi necessitatibus ullam maxime. Commodi, debitis iste? Nobis dolor nisi magnam!"/>
          </SwiperSlide>
        </div>
      </div>
    </Swiper>
    </>
  );
};
export default Reviews