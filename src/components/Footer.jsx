import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="bg-blackOut">
      <section className="container x-padding">
        <div className="grid md:grid-cols-4 gap-5">
          <div className="text-secondary px-1 text-xs">
            <img src={logo} alt="cafe logo" className="w-40 pb-3" />
            <p className=" mb-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dicta rem quae reprehenderit voluptatibus quo consectetur labore
              sit? Atque, quaerat.
            </p>
            <div className="flex gap-3 items-center mb-1 ">
              <i class="fa-regular fa-envelope"></i>
              <p>youssefelsayed42000@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center  mb-1 ">
              <i class="fa-solid fa-location-dot"></i>{" "}
              <p>Benha Qaluobia Egypt</p>
            </div>
            <div className="flex gap-3 items-center  mb-1 ">
              <i class="fa-solid fa-phone"></i> <p>+201281971848</p>
            </div>
          </div>

          <div className="text-secondary px-3 ">
            <h2 className="font-primary mb-4">Quick links</h2>
            <div className="flex flex-col">
              <Link to="about" className="mb-3 cursor-pointer">
                about us
              </Link>
              <Link to="menu" className="mb-3 cursor-pointer">
                menu
              </Link>
              <Link to="features" className="mb-3 cursor-pointer">
                features
              </Link>
              <Link to="chefs" className="mb-3 cursor-pointer">
                chefs
              </Link>
              <Link to="contact" className="mb-3 cursor-pointer">
                reservation
              </Link>
              <Link to="testimonial" className="mb-3 cursor-pointer">
                testimonial
              </Link>
            </div>
          </div>

          <div className="text-secondary ">
            <h2 className="font-primary mb-4">work hours</h2>
            <div className="bg-[#222] p-3">
              <div className="border-dashed border-tertiary p-3 flex flex-col gap-3 text-xs ">
                <div className="flex justify-between">
                  <p>saturday</p>
                  <p>8:00AM-11:00PM</p>
                </div>
                <div className="flex justify-between">
                  <p>sunday</p>
                  <p>8:00AM-11:00PM</p>
                </div>
                <div className="flex justify-between">
                  <p>monday</p>
                  <p>8:00AM-11:00PM</p>
                </div>
                <div className="flex justify-between">
                  <p>tuesday</p>
                  <p>8:00AM-11:00PM</p>
                </div>
                <div className="flex justify-between">
                  <p>wednesday</p>
                  <p>8:00AM-11:00PM</p>
                </div>
                <div className="flex justify-between">
                  <p>thursday</p>
                  <p>8:00AM-11:00PM</p>
                </div>
                <div className="flex justify-between">
                  <p>friday</p>
                  <p>1:00PM-11:00PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-secondary px-2">
            <h2 className="font-primary mb-4">new sletter</h2>
            <div>
              <p className="text-sm mb-3">
                subscribe our newseltter to get latest updates and news
              </p>
              <input
                type="email"
                placeholder="enter your email"
                className="p-2 rounded-lg w-full bg-primary text-secondary"
              />
              <a href="" className="subscribe-btn">
                subscribe
              </a>
              <h2 className="font-primary mb-4">follow us</h2>
              <div>
                <a href="" className="icon-border text-center p-1 mr-2">
                  <i class="fa-brands fa-facebook-f w-5 h-5"></i>
                </a>
                <a href="" className="icon-border text-center p-1 mr-2">
                  <i class="fa-brands fa-twitter w-5 h-5"></i>
                </a>
                <a href="" className="icon-border text-center p-1 mr-2">
                  <i class="fa-brands fa-instagram w-5 h-5"></i>
                </a>
                <a href="" className="icon-border text-center p-1 mr-2">
                  <i class="fa-brands fa-linkedin w-5 h-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="text-xs text-center pb-2 text-tertiary">
        @developed by yousef Elsayed with React.js and tailwind
      </p>
    </div>
  );
}
