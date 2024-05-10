import React, { useState } from "react";
import { links, socialMediaUrl } from "../constants/Data.jsx";
import logo from "../assets/images/logo.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const { twitter, facebook, instagram } = socialMediaUrl;
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const navbarChange = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navbarChange);
  return (
    <header
      className={`mx-auto md:flex justify-between py-2 x-padding fixed top-0 w-full z-50
      ${navbar ? "bg-primary" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center py-2 md:py-3">
        <Link to="home">
          <img className="w-24" src={logo} alt="logo" />
        </Link>
        <div onClick={toggleClass} className="cursor-pointer md:hidden">
          <i class="fa-solid fa-bars text-secondary text-2xl"></i>
        </div>
      </div>
      <nav
        className={` ${
          !isOpen ? "hidden" : null
        } text-center md:flex justify-between`}
      >
        <ul className="font-medium md:flex items-center gap-5 md:mr-10">
          {links.map((nav) => (
            <li key={nav.path} className="text-secondary md:mb-0 mb-1">
              <Link
                to={`${nav.path}`}
                onClick={() => {
                  toggleClass();
                }}
                className="cursor-pointer"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <i class="fa-brands fa-twitter text-secondary text-xl"></i>
            </a>
          </li>
          <li>
            <a href={facebook} target="_blank" rel="noreferrer noopener">
              <i class="fa-brands fa-facebook text-secondary text-xl"></i>
            </a>
          </li>
          <li>
            <a href={instagram} target="_blank" rel="noreferrer noopener">
              <i class="fa-brands fa-instagram text-secondary text-xl"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
