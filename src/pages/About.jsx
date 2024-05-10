import React from "react";
import aboutImg from "../assets/images/about-img.jpg";
import { Link } from "react-scroll";
export default function About() {
  return (
    <main className="bg-primary" id="about">
      <section className="container x-padding">
        <div className="grid md:grid-cols-2 grid-clos-1 gap-6 items-center">
          <img
            className="w-4/5 mx-auto img-border "
            src={aboutImg}
            alt="About-image"
          ></img>
          <div className="text-secondary">
            <h2>about us</h2>
            <h1 className="font-primary md:text-3xl text-2xl mb-4 mt-2">
              fresh quality and organic tasty coffee house for you{" "}
            </h1>
            <p className="text-tertiary mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              doloremque odit illum deleniti id, aspernatur nihil ullam
              molestiae magni aut.
            </p>
            <div className="mb-2 inline-flex gap-3 items-center">
              <i class="fa-solid fa-check p-0"></i>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="mb-2 inline-flex gap-3 items-center">
              <i class="fa-solid fa-check p-0"></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mb-2 inline-flex gap-3 items-center">
              <i class="fa-solid fa-check p-0"></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>

            <Link to="chefs" className="btn main-shadow">
              our experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
