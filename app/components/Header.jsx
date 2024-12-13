"use client";
import React, { useState, useEffect } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative">
      <div className="bg-black text-white flex justify-between items-start relative">
        <div className="flex flex-row w-full md:w-fit md:pl-40 text-black items-center justify-center md:justify-normal md:items-start px-6 bg-[#E4E4E4]">
          <div className="flex flex-col pt-8 md:pt-12 pb-14 md:pb-16 md:items-start md:w-fit md:ml-auto z-20">
            <h1 className="text-3xl font-[700] md:text-3xl mr-auto">SAMARTH</h1>
            <p className="text-sm md:text-xl mr-auto">ENTERPRISES</p>
          </div>
          <div className="hidden md:flex md:absolute md:ml-32 h-full w-28 bg-[#E4E4E4] transform skew-x-[30deg] z-10"></div>
        </div>

        <div className="hidden md:flex w-full space-x-8 pt-12 text-sm z-20 md:pr-40">
          <div className="flex ml-auto items-center space-x-2">
            <div className="text-4xl">
              <LuPhoneCall />
            </div>
            <div className="flex flex-col">
              <span className="text-red-700 font-[500]">Call Us: </span>
              <span className="text-lg font-[700]">+91-7447499433</span>
            </div>
          </div>
          <div className="flex nl-auto items-center space-x-2">
            <div className="text-4xl">
              <FiMail />
            </div>
            <div className="flex flex-col">
              <span className="text-red-700 font-[500]">E-mail Us: </span>
              <span className="text-lg font-[700]">
                admin@technometent.co.in
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-transparent mt-2 md:mt-0 animate-slideDown"
            : "absolute mt-[-35px]"
        } w-full z-40 px-4 flex md:space-x-12 items-center md:px-40 text-black transition-all duration-300`}
      >
        <ul className="relative whitespace-nowrap w-full flex bg-white px-8 space-x-6 text-base font-[600]">
          <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative py-6 text-2xl cursor-pointer group">
            <GiHamburgerMenu />
          </li>
          <li className="hidden md:flex relative py-6 cursor-pointer group">
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="hidden md:flex relative py-6 cursor-pointer group">
            Products
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="hidden md:flex relative py-6 cursor-pointer group">
            Services
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="hidden md:flex relative py-6 cursor-pointer group">
            Video
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="hidden md:flex relative py-6 cursor-pointer group">
            Events
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="hidden md:flex relative py-6 cursor-pointer group">
            Enquiry
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="hidden md:flex relative py-6 cursor-pointer group">
            Contact Us
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <div className="absolute right-[-14px] top-1/2 m transform -translate-y-1/2 h-full w-7 bg-white skew-x-[-20deg] z-50"></div>
        </ul>

        <button className="group relative whitespace-nowrap flex flex-row bg-red-600 text-white px-4 py-6 hover:bg-red-700 z-50">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full w-7 ml-[-14px] bg-red-600 skew-x-[-20deg] group-hover:bg-red-700 z-50"></div>
          <span className="group-hover:text-white">Get a Quote →</span>
        </button>
      </nav>



            {/* Fullscreen Menu */}
            {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsMenuOpen(false)} // Close menu on background click
        >
          <ul className="space-y-6 text-white text-center font-[600] text-xl">
            <li className="hover:text-red-600">Home</li>
            <li className="hover:text-red-600">Products</li>
            <li className="hover:text-red-600">Services</li>
            <li className="hover:text-red-600">Video</li>
            <li className="hover:text-red-600">Events</li>
            <li className="hover:text-red-600">Enquiry</li>
            <li className="hover:text-red-600">Contact Us</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
