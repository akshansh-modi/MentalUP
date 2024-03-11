import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" fixed w-full z-10 text-black">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold">mentalUP</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
             Coaches
            </Link>
            {/* <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Blog
            </Link> */}
          </nav>

          <div className=" flex flex-row gap-4 ">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          

          {showForm && <Contact closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
            <div
              className={`${
                menu ? "flex" : "hidden"
              } lg:hidden flex flex-col absolute bg-white text-black right-0 top-16 font-semibold text-md text-center   pb-1 rounded-lg w-[7rem] gap-1  h-fit transition-transform duration-300`}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className=" menulink hover:text-hoverColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="menulink  hover:text-hoverColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="menulink  hover:text-hoverColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="doctors"
                spy={true}
                smooth={true}
                duration={500}
                className=" menulink  hover:text-hoverColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
               Coaches
              </Link>
              {/* <Link
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
                className=" menulink  hover:text-hoverColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Blog
              </Link> */}
{/* 
              <div className=" lg:hidden">
                <button
                  className="menulink  hover:text-hoverColor bg-white text-black transition-all  transition duration-300 ease-in-out"
                  onClick={openForm}
                >
                  Contact Us
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
