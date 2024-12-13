import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen bg-white px-2 md:px-40 text-black py-24 md:py-24 ">
      <div className="mt-4 md:mt-0 w-full  mb-auto md:mb-0">
        <h1 className="font-[700] text-3xl">Who We are</h1>
        <p className="py-8 text-lg text-[#555555] tracking-wide font-[400]">
          At Samarth Enterprises, we&apos;re passionate about delivering
          exceptional quality materials and services to the foundry industry.
          With 17+ years of experience and a commitment to excellence, we&apos;ve
          established ourselves as a trusted partner for foundries worldwide.
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
  );
};

export default AboutUs;
