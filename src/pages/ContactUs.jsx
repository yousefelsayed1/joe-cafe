import React from "react";
import contact from "../assets/images/contact.svg";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="bg-primary" id="contact">
      <section className="container x-padding ">
        <form className="bg-primary border-dashed border-tertiary p-8">
          <div className="text-center mb-10">
            <h2 className="font-primary text-tertiary mb-2">reservation</h2>
            <h1 className="font-primary text-secondary section-heading mb-3 drop-shadow-md">
              book a table
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="name"
              className="p-2 bg-[#333] rounded-lg text-secondary "
            />
            <input
              type="email"
              placeholder="email"
              className="p-2 bg-[#333] rounded-lg text-secondary"
            />
            <input
              type="number"
              placeholder="phone"
              className="p-2 bg-[#333] rounded-lg text-secondary"
            />
            <input
              type="date"
              placeholder="date"
              className="p-2 bg-[#333] rounded-lg text-secondary w-full"
            />
            <input
              type="time"
              placeholder="time"
              className="p-2 bg-[#333] rounded-lg text-secondary w-full"
            />
            <input
              type="number"
              placeholder="number of guests"
              className="p-2 bg-[#333] rounded-lg text-secondary"
            />
            <textarea
              name="message"
              placeholder="any other details ?"
              rows={5}
              className=" p-2 bg-[#333] rounded-lg text-secondary md:col-span-3"
            ></textarea>
          </div>
          <a className="btn ml-2">book it</a>
        </form>
      </section>
    </div>
  );
}
