import React, { useEffect } from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

import Home from "../assets/imgs/home.jpg";
import logoSvg from "../assets/BirvenLogo.svg";

export default function IntroBanner() {
  useEffect(() => {
    const element = document.getElementById("bg-image");
    element.classList.add("animate-zoom-in");

    return () => {
      element.classList.remove("animate-zoom-in");
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <div
        id="bg-image"
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${Home})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-2.5 px-4 py-24 sm:px-6 flex w-full justify-center lg:h-screen lg:px-8">
        <div className="text-white mt-5 ">
          <img src={logoSvg} alt="#" className="h-96" />
          <div className="w-full flex justify-center mt-10">
            <h1 className="font-serif uppercase text-md">Scroll For More</h1>
          </div>
          <div className="w-full flex justify-center mt-5">
            <ArrowDownCircleIcon className=" animate-bounce h-6 w-6 text-white " />
          </div>
        </div>
      </div>
    </div>
  );
}
