import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-col p-4 md:p-0 md:px-40 pb-16">
      <div className="flex flex-col md:flex-row md:space-x-4 justify-between text-white">
        <div className="w-full space-y-1 md:space-y-0">
          <div className="md:mt-[-10px] top-0 z-20 h-[10px] bg-[#EC3127]">

          </div>
          <Image
            src="/visitingCard.jpg"
            alt="logo"
            className="w-full"
            width={1000}
            height={1000}
          ></Image>
        </div>

        <div className="w-full  flex flex-row justify-between">
          <div className="w-full flex flex-col items-center pt-14">
            <h1 className=" font-[700] pb-8">Get in Touch</h1>
            <div className="flex space-y-4 flex-col">
              <h1>Twitter</h1>
              <h1>Facebook</h1>
              <h1>LinkedIn</h1>
              <h1>Skype</h1>
              <h1>Instagram</h1>
            </div>
          </div>
          <div className="w-full items-center  flex flex-col pt-14">
            <h1 className=" font-[700] pb-8">Products</h1>
            <div className="flex space-y-1 flex-col">
              <h1 className="border-b pb-1 border-[#282828]">Twitter</h1>
              <h1 className="border-b pb-1 border-[#282828]">Facebook</h1>
              <h1 className="border-b pb-1 border-[#282828]">LinkedIn</h1>
              <h1 className="border-b pb-1 border-[#282828]">Skype</h1>
              <h1>Instagram</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
