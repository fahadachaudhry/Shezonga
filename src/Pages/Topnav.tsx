import React from "react";
import Logo from "../components/Logo";

function Topnav() {
  return (
    <div className="container mx-auto px-4 mb-32">
      <div className="flex w-full items-center justify-between mb-20 py-10">
        <div className="text-2xl font-semibold">
          <Logo />
        </div>
      </div>
      <div className="flex items-start flex-wrap justify-between">
        <div className="w-full lg:w-9/12 pb-10 lg:pb-0">
          <h1 className="uppercase text-4xl lg:text-8xl text-zinc-800">
            MORE THAN JUST A CONSULTING AGENCY
          </h1>
        </div>
        <div className="md:w-full lg:w-3/12">
          <p className="mb-6">
            Out people are laser-focussed. High performers without the ego.
          </p>
          <p>
            We bring an entrepreneurial mindset to your toughest challenges,
            building businesses that redefine industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
