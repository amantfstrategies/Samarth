import Image from "next/image";
import Header from "./components/Header";
import HomeCarousel from "./components/HomeCarousel";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <HomeCarousel/>
      <Products/>
      <AboutUs/>
    </div>
  );
}
