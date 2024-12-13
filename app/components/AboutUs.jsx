import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { FaBullseye } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white px-2 md:px-40 text-black py-24 md:py-24 ">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="mt-4 md:mt-0 w-full  mb-auto md:mb-0">
          <h1 className="font-[700] text-3xl">Who We are</h1>
          <p className="py-8 text-lg text-[#555555] tracking-wide font-[400]">
            At Samarth Enterprises, we&apos;re passionate about delivering
            exceptional quality materials and services to the foundry industry.
            With 17+ years of experience and a commitment to excellence,
            we&apos;ve established ourselves as a trusted partner for foundries
            worldwide.
          </p>
        </div>
        <div className="w-full mb-auto md:mb-0">
          <Image
            src="/about.jpg"
            alt="about us"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>

      <div className="flex flex-col md:flex-row my-4">
        <div className="flex space-x-2 bg-[#F6F6F6] p-4 py-8 w-full">
            <div className="flex items-center justify-center px-4">
                <FaEye className="text-7xl"/>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className="text-2xl font-[700]">
                    Our Vision
                </h1>
                <p className="text-[#555555]">Our vision is to establish Samarth Enterprises as a global leader in the supply of premium industrial products, renowned for our uncompromising quality, innovative solutions, and world-class customer service, thereby setting the standard for excellence in the industry.</p>
            </div>
        </div>

        <div className="flex space-x-2 bg-[#BCBCBC] p-4 py-8 w-full">
            <div className="flex items-center justify-center px-4">
                <FaBullseye className="text-7xl"/>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className="text-2xl font-[700]">
                    Our Mission
                </h1>
                <p className="text-[#555555]">At Samarth Enterprises, our mission is to consistently deliver exceptional quality materials and services to the foundry industry, fostering strong, lasting relationships built on trust, reliability, and a unwavering commitment to excellence.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
