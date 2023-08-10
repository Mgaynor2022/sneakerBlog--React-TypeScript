import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import "../CSS/Carousel.css"

const image = [
     {url:"https://images.unsplash.com/photo-1441986300917-64674bd600d8"},
     {url:"https://images.unsplash.com/photo-1532561685579-890e8f61456a"},
     {url:"https://images.unsplash.com/photo-1662376569307-b9a56a9adc98"},
     {url:"https://images.unsplash.com/photo-1689830378783-bc5d377796ee"},
     {url:"https://images.unsplash.com/photo-1573559606636-faaa15138a63"},
]


 const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === image.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? image.length - 1 : slide - 1);
  };

  return (
    <div id="hero">

    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {image.map((item, idx) => {
        return (
          <img
            src={item.url}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {image.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
    </div>
  );
};

export default Carousel