import React from "react";
import { features } from "../constants/Data";
import beans from "../assets/images/shape.png";

export default function Features() {
  return (
    <main className="bg-primary" id="features">
      <section className="container x-padding ">
        <div className="text-center mb-10">
          <h2 className="font-primary text-tertiary mb-2">Features</h2>
          <h1 className="font-primary text-secondary section-heading mb-3 drop-shadow-md">
            our best features
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-7 justify-center">
          {features.map((el, i) => (
            <div
              key={el.id}
              className="hover-primary bg-[#222] p-3 max-w-[280px]"
            >
              <div className="main-border p-3">
                <div className="flex justify-between">
                  <img src={el.img} alt="icon" className="w-[50px] mb-5" />
                  <img src={beans} alt="benasImg" className="w-[100px] " />
                </div>
                <h2 className="text-lg font-primary text-secondary mb-2">
                  {el.title}
                </h2>
                <p className="text-zinc-400 text-sm leading-7">
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
