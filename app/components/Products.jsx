"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const Products = () => {
  const categories = [
    {
      category: "Carbon Additives",
      id: 1,
      products: [
        {
          id: 1,
          name: "Calcined Petroleum Coke (CPC)",
          productImg: "/products/product1.jpeg",
          productSubImage: "/products/product1.jpeg",
          productDesc:
            "High-purity carbon material derived from petroleum coke. Widely used in steel and aluminum industries for its excellent conductivity.",
        },
        {
          id: 2,
          name: "Calcined Anthracite Coal (CAC)",
          productImg: "/products/product2.jpeg",
          productSubImage: "/products/product1.jpeg",
          productDesc:
            "A premium carbon source for metallurgical applications. Known for its low ash and sulfur content.",
        },
        {
          id: 3,
          name: "Graphitized Petroleum Coke (GPC)",
          productImg: "/products/product3.jpeg",
          productSubImage: "/products/product1.jpeg",
          productDesc:
            "A by-product of refining crude oil, GPC offers high carbon purity. Essential for graphite electrode production.",
        },
        {
          id: 4,
          name: "Coconut Shell Charcoal",
          productImg: "/products/product4.jpeg",
          productSubImage: "/products/product1.jpeg",
          productDesc:
            "Sustainable charcoal sourced from coconut shells. Popular in the manufacturing of activated carbon.",
        },
      ],
    },
    {
      category: "Ferro Alloys",
      id: 2,
      products: [
        {
          id: 5,
          name: "Ferro Silicon",
          productImg: "/products/product1.jpeg",
          productSubImage: "/products/product1.jpeg",
          productDesc:
            "An alloy of iron and silicon used as a deoxidizer in steelmaking. Enhances strength and durability of the final product.",
        },
        {
          id: 6,
          name: "Ferro Manganese",
          productImg: "/products/product1.jpeg",
          productSubImage: "/products/product1.jpeg",
          productDesc:
            "Adds manganese to steel and cast iron, improving hardness and wear resistance. Widely used in manufacturing industries.",
        },
        {
          id: 7,
          name: "Ferro Chromium",
          productImg: "/products/product1.jpeg",
          productSubImage: "/products/product1.jpeg",
          productDesc:
            "Provides corrosion resistance and hardness to steel. A critical component in stainless steel production.",
        },
        {
          id: 8,
          name: "Ferro Molybdenum",
          productImg: "/products/ferro-molybdenum.jpeg",
          productSubImage: "/products/ferro-molybdenum-sub.jpeg",
          productDesc:
            "Increases strength, hardness, and resistance to corrosion in steel. Essential in high-strength low-alloy steels.",
        },
      ],
    },
    {
      category: "Nodulizer & Inoculants",
      id: 3,
      products: [
        {
          id: 9,
          name: "Ferro Silicon Magnesium",
          productImg: "/products/product1.jpeg",
          productSubImage: "/products/product1.jpeg",
          productDesc:
            "A nodulizer that improves ductility and toughness of cast iron. Used in manufacturing ductile iron castings.",
        },
        {
          id: 10,
          name: "Silicon Barium Inoculants",
          productImg: "/products/silicon-barium.jpeg",
          productSubImage: "/products/silicon-barium-sub.jpeg",
          productDesc:
            "Enhances the microstructure of cast iron by reducing chill and promoting uniformity. Vital in high-quality casting applications.",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedProduct, setSelectedProduct] = useState(
    selectedCategory.products[0]
  );


  useEffect(() => {
    console.log("Selected Category",selectedCategory)
    console.log("Selected Product",selectedProduct)
  }, [selectedCategory, selectedProduct])

  // const [selectedProduct, setSelectedProduct] = useState(productsList[0]);
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

  const SelectCategory = (category) => {
    if (selectedCategory.category !== category.category) {
      // Trigger animation reset
      setIsAnimating(false);
      setTimeout(() => {
        setSelectedCategory(category);
        setSelectedProduct(selectedCategory.products[0])
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

        {/* Here instead of product list we should show the category names  */}
        {categories.map((category) => (
          
          <button
            onClick={() => SelectCategory(category)}
            className={`flex items-center text-black my-2 md:my-4 text-sm md:text-lg font-[500] hover:text-[#C1262F] bg-[#F3F5F7] w-full py-3 md:py-4 text-start px-4 md:px-6 rounded-xl relative group ${
              selectedCategory.category === category.category
                ? "text-[#C1262F]"
                : ""
            }`}
            key={category.id}
          >
            <h1 className={`text-sm md:text-lg ${
                            selectedCategory.category === category.category
                            ? "text-[#C1262F]"
                            : ""
            }`}>{category.category}</h1>
            {console.log(selectedCategory.category === category.category)}
            <div
              className={`group-hover:block md:ml-2 text-[#C1262F] text-lg md:text-2xl ${
                selectedCategory.category === category.category ? "block" : "hidden"
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
      {/* Here show the product images inside that category */}
      <div className="flex flex-col  py-4 w-full">
        <div className="pb-2 w-full ">
          <Image
            src={selectedProduct.productImg}
            height={1000}
            width={1000}
            quality={75}
            alt="patronage"
            className="object-cover w-full md:h-96 h-40"
          />
          <div className="flex gap-3 md:gap-6 pt-5  overflow-y-auto no-scrollbar">
            {/* Clickable images to change the main image */}

            {selectedCategory.products
              .filter((product) => product.id !== selectedProduct.id) // Exclude the selected product
              .map((product) => (
                <Image
                  src={product.productImg}
                  height={1000}
                  width={1000}
                  quality={75}
                  key={product.id}
                  alt={product.name}
                  className="md:w-28 w-24 cursor-pointer"
                  onClick={() => {
                    console.log(product);
                    setSelectedProduct(product)}}
                />
              ))}

            {/* <Image
              src="/alumina2.jpg"
              height={1000}
              width={1000}
              quality={75}
              alt="patronage"
              className="md:w-28 w-24 cursor-pointer"
              onClick={() => setSelectedImage("/alumina2.jpg")}
            />
            <Image
              src="/alumina.png"
              height={1000}
              width={1000}
              quality={75}
              alt="patronage"
              className="md:w-28 w-24 cursor-pointer"
              onClick={() => setSelectedImage("/alumina.png")}
            /> */}
          </div>
        </div>
        <div className="flex flex-col h-full md:h-1/2 py-2">
          <h1 className="text-xl md:text-2xl font-[500]">
            {selectedProduct.name}
          </h1>
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
