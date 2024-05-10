import React from "react";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      className="bg-coffeeCover bg-cover bg-no-repeat bg-center h-dvh "
      id="home"
    >
      <div className="container x-padding h-full flex items-center">
        <div className="md:w-1/2 w-full text-secondary">
          <h1 className="font-primary home-heading mb-3">joe cafe</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            officia, labore iusto aut accusantium eaque. Iste repellendus ab
            enim odit aliquid recusandae expedita ullam deleniti?
          </p>
          <Link to="menu" className="btn mian-shadow">
            our menu
          </Link>
        </div>
      </div>
    </div>
  );
}
