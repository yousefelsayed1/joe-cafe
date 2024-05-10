import React from "react";
import { menu } from "../constants/Data";
import menuBg from "../assets/images/bg.jpg";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <main
      style={{ backgroundImage: `url(${menuBg})` }}
      className="bg-cover bg-no-repeat bg-center bg-fixed"
      id="menu"
    >
      <div className="bg-[rgba(0,0,0,.6)] w-full h-full">
        <section className="container x-padding mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-primary text-tertiary mb-2">menu</h2>
            <h1 className="font-primary text-secondary section-heading mb-3 drop-shadow-md">
              variety Kinds of coffee
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {menu.map((el) => (
              <motion.div
                key={el.id}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.6,
                }}
                className=" bg-[#111] flex p-3 rounded-lg items-center"
              >
                <div className="image">
                  <img
                    src={el.img}
                    alt={el.id}
                    className="w-20 border-dashed rounded-full border-tertiary mr-5"
                  />
                </div>
                <div className="content grow">
                  <h1 className="text-secondary">{el.title}</h1>
                  <p className="text-tertiary">{el.description}</p>
                </div>
                <div className="h-full w-1 bg-gradient"></div>
                <div className="price ml-4">
                  <h4 className="text-secondary ">{el.price}LE</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
