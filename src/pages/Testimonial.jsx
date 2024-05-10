import React from "react";
import { testimonials } from "../constants/Data";
import Slider from "react-slick";
export default function Testimonial() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="bg-primary" id="testimonial">
      <section className="container mx-auto xl:px-24 px-10">
        <div className="text-center mb-10">
          <h2 className="font-primary text-tertiary mb-2">testimonials</h2>
          <h1 className="font-primary text-secondary section-heading mb-3 drop-shadow-md">
            what our client's says
          </h1>
        </div>
        <Slider {...settings} className="md:w-[60%] mx-auto">
          {testimonials.map((el) => (
            <div key={el.id} className=" flex flex-col px-5">
              <div className="p-3  mb-5 bg-[#333] rounded-lg">
                <p className="text-secondary text-sm">{el.description}</p>
              </div>
              <div className="flex">
                <img
                  src={el.img}
                  className="w-20 border-dashed rounded-full border-tertiary mr-5"
                  alt=""
                />
                <div className="content">
                  <h2 className="font-primary text-secondary mb-2">
                    {el.title}
                  </h2>
                  <h3 className="text-tertiary">{el.service}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
