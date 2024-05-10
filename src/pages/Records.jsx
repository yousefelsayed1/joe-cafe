import React from "react";
import { records } from "../constants/Data";
export default function Records() {
  return (
    <div className="bg-blackOut">
      <section className="container x-padding mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
          {records.map((el) => (
            <div className="flex flex-col items-center p-3" key={el.id}>
              <div className="record relative w-24 h-24 mb-5">
                <div className="bg-record"></div>
                <img
                  src={el.img}
                  alt="coffee-shop"
                  className="w-[70px] relative z-10 mx-auto m-2"
                />
              </div>
              <h1 className="text-secondary md:text-3xl text-2xl mb-2">
                {el.record}
              </h1>
              <h4 className="text-secondary text-lg font-primary">
                {el.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
