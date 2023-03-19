import React from "react";
import hero1 from "../assets/hero-1.avif";
import hero2 from "../assets/hero-2.avif";

function Hero() {
  return (
    <div className="flex items-start justify-start flex-wrap lg:flex-nowrap mb-32">
      <div className="w-full lg:w-8/12">
        <div
          className="cover bg-top w-full"
          style={{
            height: "600px",
            backgroundImage: `url(${hero1})`,
          }}
        />
      </div>
      <div className="w-full lg:w-4/12">
        <div
          className="cover bg-center w-full"
          style={{
            height: "600px",
            backgroundImage: `url(${hero2})`,
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
