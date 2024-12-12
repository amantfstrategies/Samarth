import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
const Header = () => {
  return (
    <header className="relative ">
      <div className="bg-black text-white flex justify-between items-start relative">
        <div className="flex flex-row w-fit  md:pl-40 text-black items-start px-6 bg-[#E4E4E4]">
          <div className="flex flex-col pt-12 py-8 pb-16 items-start w-fit ml-auto z-20">
            <h1 className="text-3xl mr-auto">TECHNOMET </h1>
            <p className="text-xl mr-auto">ENTERPRISES</p>
          </div>

          <div className="absolute ml-40  h-full  w-28 bg-[#E4E4E4] transform  skew-x-[30deg] z-10"></div>
        </div>

        <div className="flex w-full space-x-8 pt-12 text-sm z-20 md:pr-40">
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
              <span className="text-lg font-[700]">admin@technometent.co.in</span>
            </div>


          </div>
        </div>
      </div>

      <nav className="sticky  mt-[-35px] z-40  flex space-x-12 items-center mx-40   text-black">
        <ul className="relative w-full flex bg-white px-8 space-x-6 text-base font-[600]">
          <li className="relative py-6 cursor-pointer group">
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="relative py-6 cursor-pointer group">
            About Us
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="relative py-6 cursor-pointer group">
          Services
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="relative py-6 cursor-pointer group">
          Video
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="relative py-6 cursor-pointer group">
          Events
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="relative py-6 cursor-pointer group">
          Enquiry
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="relative py-6 cursor-pointer group">
          Contact Us
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          {/* <li className="relative py-6 cursor-pointer group">
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="relative py-6 cursor-pointer group">
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li>
          <li className="relative py-6 cursor-pointer group">
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </li> */}
          {/* <li className="hover:text-red-600 cursor-pointer">About Us</li>
          <li className="hover:text-red-600 cursor-pointer">Services</li>
          <li className="hover:text-red-600 cursor-pointer">Video</li>
          <li className="hover:text-red-600 cursor-pointer">Events</li>
          <li className="hover:text-red-600 cursor-pointer">Enquiry</li>
          <li className="hover:text-red-600 cursor-pointer">Contact Us</li> */}
          <div className="absolute right-[-14px] top-1/2 m transform -translate-y-1/2 h-full w-7  bg-white skew-x-[-20deg] z-50"></div>
        </ul>
        
        <button className="relative w- whitespace-nowrap flex flex-row bg-red-600 text-white px-4 py-6 hover:bg-red-700">
          <div className="absolute left-0 top-1/2 transform group-hover:bg-red-700 hover:bg-red-700 -translate-y-1/2 h-full w-7 ml-[-14px] bg-red-600 skew-x-[-20deg] z-50"></div>
          Get a Quote →
        </button>


      </nav>
    </header>
  );
};

export default Header;
