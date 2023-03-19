import React from "react";
import officeCafe from "../assets/office-cafe.avif";

function About() {
  return (
    <div className="container mx-auto px-4 mb-20">
      <h1 className="uppercase text-violet-500 mb-2">About the Company</h1>
      <p className="uppercase text-2xl lg:text-4xl text-zinc-800 mb-20 lg:mb-36 lg:w-8/12">
        What happens when you bring together a team of passionate experts who
        put people first and strive for success?
      </p>
      <div className="flex items-start justify-between flex-wrap">
        <div className="w-full lg:w-4/12 lg:pr-20 pb-20 lg:pb-0">
          <div className="bg-white w-full h-48 overflow-hidden relative flex flex-col justify-evenly p-6">
            <div className="w-40 h-40 bg-violet-500 rounded-full -right-20 -top-20 absolute"></div>
            <h1 className="font-semibold text-2xl">Our Work</h1>
            <p>
              We work with passionate, fearless leaders. Those unafraid to go
              against the grain. Building businesses that impact the world.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-8/12 relative">
          <div
            className="bg-center bg-cover absolute top-0 right-0 w-full ml-20 h-96"
            style={{
              backgroundImage: `url(${officeCafe})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
