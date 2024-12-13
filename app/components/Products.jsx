"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const Products = () => {
  const productsList = [
    {
      id: 1,
      name: "Small Road Barrier",
      productImg: "/products/product1.jpeg",
      productSubImage: "/products/product1.jpeg",
      productDesc:
        "A compact road barrier designed for small roads or construction zones. It offers reliable safety and is easy to transport and install. Perfect for urban areas or narrow streets requiring temporary traffic control.",
    },
    {
      id: 2,
      name: "Medium Road Barrier",
      productImg: "/products/product2.jpeg",
      productSubImage: "/products/product2.jpeg",
      productDesc:
        "A medium-sized road barrier offering an ideal balance between portability and visibility. It is suitable for both urban and rural areas and is highly visible even from a distance, making it perfect for medium-traffic zones.",
    },
    {
      id: 3,
      name: "Large Road Barrier",
      productImg: "/products/product3.jpeg",
      productSubImage: "/products/product3.jpeg",
      productDesc:
        "A large and robust road barrier designed for high-traffic roads or highways. This barrier provides maximum protection and is built for long-term use. It is suitable for construction sites and emergency roadwork zones.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(productsList[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const SelectProduct = (product) => {
    if (selectedProduct.id !== product.id) {
      // Trigger animation reset
      setIsAnimating(false);
      setTimeout(() => {
        setSelectedProduct(product);
        setIsAnimating(true); // Restart animation
      }, 100); // Small delay to allow animation reset
    }
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row md:space-x-4 min-h-screen h-auto mx-4 md:mx-40 py-12"
    >
      {/* Products List */}
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl font-[500] my-4">Our Products</h1>
        <p className="font-[400] mb-8 md:mb-12 text-gray-500 text-sm md:text-base">
          Ador offers a deep understanding of the unique local conditions,
          unparalleled services, and countless options to make a tailor-made
          solution for your needs.
        </p>
        {productsList.map((product) => (
          <button
            onClick={() => SelectProduct(product)}
            className={`flex items-center text-black my-2 md:my-4 text-sm md:text-lg font-[500] hover:text-[#C1262F] bg-[#F3F5F7] w-full py-3 md:py-4 text-start px-4 md:px-6 rounded-xl relative group ${
              selectedProduct.id === product.id ? "text-[#C1262F]" : ""
            }`}
            key={product.id}
          >
            <h1 className="text-sm md:text-lg">{product.name}</h1>
            <div
              className={`group-hover:block md:ml-2 text-[#C1262F] text-lg md:text-2xl ${
                selectedProduct.id === product.id ? "block" : "hidden"
              }`}
            >
              <GoArrowRight />
            </div>
          </button>
        ))}
      </div>

      {/* Main Image */}
      {/* <div className="p-4 rounded h-100 w-full hidden md:block">
        <Image
          className={`h-screen w-full object-cover rounded-xl transition-all duration-500 ease-in-out ${
            isVisible || isAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          src={selectedProduct.productImg}
          alt="Product"
          width={500}
          height={500}
        />
      </div> */}

      {/* Sub Image and Description */}
      <div className="flex flex-col  py-4 w-full">
        <div className="pb-2 w-full ">
          <Image
            className={` w-full rounded-xl object-cover transition-all duration-500 ease-in-out ${
              isVisible || isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            src={selectedProduct.productSubImage}
            alt="Product"
            width={1500}
            height={1500}
          />
        </div>
        <div className="flex flex-col h-full md:h-1/2 py-2">
          <h1 className="text-xl md:text-2xl font-[500]">{selectedProduct.name}</h1>
          <p className="transition-all duration-500 ease-in-out mt-2 text-gray-600 text-sm md:text-base">
            {selectedProduct.productDesc}
          </p>
          <button className="flex my-8 md:my-0 transition-all duration-500 ease-in-out md:mt-auto flex-row w-fit px-4 py-2 md:py-3  md:px-6 rounded-full text-xs md:text-sm font-[500] space-x-2 items-center text-white bg-[#C1262F]">
            Read More
            <GoArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
