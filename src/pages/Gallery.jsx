import React from "react";
import { gallery } from "../constants/Data";
import Slider from "react-slick";
export default function Gallery() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-primary" id="gallery">
      <section className="container mx-auto xl:px-24 px-10 ">
        <div className="text-center mb-10">
          <h2 className="font-primary text-tertiary mb-2">gallery</h2>
          <h1 className="font-primary text-secondary section-heading mb-3 drop-shadow-md">
            our gallery
          </h1>
        </div>
        <div className="slider-container"></div>
        <Slider {...settings}>
          {gallery.map((el) => (
            <div key={el.id}>
              <img src={el.img} className="w-full" alt={el.title} />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
