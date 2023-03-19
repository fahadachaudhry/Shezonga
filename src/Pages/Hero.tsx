import React from "react";

function Hero() {
  return (
    <div className="flex items-start justify-start flex-wrap lg:flex-nowrap mb-32">
      <div className="w-full lg:w-8/12">
        <div
          className="cover bg-top w-full"
          style={{
            height: "600px",
            backgroundImage: `url(${"https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"})`,
          }}
        />
      </div>
      <div className="w-full lg:w-4/12">
        <div
          className="cover bg-center w-full"
          style={{
            height: "600px",
            backgroundImage: `url(${"https://images.unsplash.com/photo-1543269865-4430f94492b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"})`,
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
