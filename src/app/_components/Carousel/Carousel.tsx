"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { FC, useRef } from "react";
import Slider from "react-slick";

import "./Carousel.css";

interface CarouselProps {
  images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  let sliderRef = useRef<Slider | null>(null);

  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container w-full overflow-x-hidden">
      <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
        {images.map((image, index) => (
          <div key={image}>
            <img
              src={image}
              key={image}
              alt={`carousel-${index}`}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
