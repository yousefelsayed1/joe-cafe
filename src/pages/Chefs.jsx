import React from "react";
import { chefs } from "../constants/Data";
import { motion } from "framer-motion";

export default function Chefs() {
  //// I staggered with multiply id on a delay in features component
  //// thats a stagger with variants
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-primary" id="chefs">
      <section className="container x-padding">
        <div className="text-center mb-10">
          <h2 className="font-primary text-tertiary mb-2">chefs</h2>
          <h1 className="font-primary text-secondary section-heading mb-3 drop-shadow-md">
            meet our experts
          </h1>
        </div>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 sm:grid-cols-2 gap-7 justify-center"
        >
          {chefs.map((el) => (
            <motion.li
              variants={itemVariants}
              key={el.id}
              className="bg-[#111] p-1 max-w-[280px] flex flex-col items-center"
            >
              <div className="relative">
                <div className="chefs-icons absolute flex flex-col right-0 backdrop-blur">
                  <a>
                    <i class="fa-brands fa-facebook text-secondary text-2xl m-2 icon cursor-pointer"></i>
                  </a>
                  <a>
                    <i class="fa-brands fa-instagram text-secondary text-2xl m-2 icon cursor-pointer"></i>
                  </a>
                  <a>
                    <i class="fa-brands fa-twitter text-secondary text-2xl m-2 icon cursor-pointer"></i>
                  </a>
                </div>
                <img
                  src={el.img}
                  alt={el.name}
                  className="w-full mb-3"
                  loading="lazy"
                />
              </div>
              <div className="content text-center">
                <h1 className="text-secondary mb-1 font-primary">{el.name}</h1>
                <h2 className="text-tertiary mb-3">senior chef</h2>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
}
