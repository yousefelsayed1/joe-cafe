import React from "react";
import blackCoffee from "../assets/images/choose.jpg";
import { choose } from "../constants/Data";

export default function ChooseUs() {
  return (
    <div className="bg-primary">
      <section className="container x-padding mx-auto">
        <div className="grid lg:grid-cols-2 justify-center gap-7">
          <div className="content">
            <h3 className="font-primary text-tertiary mb-2">why choose Us </h3>
            <h1 className="font-primary text-secondary section-heading mb-3">
              coffee most out of your tasty coffee house{" "}
            </h1>
            <p className="md:mb-8 mb-4 text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates eaque et tempora necessitatibus reprehenderit eius, non
              autem debitis maiores. Commodi dolores reprehenderit odio sint,
              explicabo ipsum accusamus incidunt dicta nam.
            </p>
            <div className="flex flex-col">
              {choose.map((el) => (
                <div key={el.id} className="flex pb-4 items-center">
                  <img
                    src={el.img}
                    alt={el.title}
                    className="w-14 border-dashed rounded-full border-tertiary mr-5 p-2"
                  />
                  <div className="content">
                    <h1 className="text-secondary mb-2 font-primary">
                      {el.heading}
                    </h1>
                    <p className="text-secondary leading-7">{el.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="image">
            <img
              src={blackCoffee}
              alt="coffee-image"
              className="w-full img-border-2 drop-shadow-md "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
