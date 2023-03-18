import React from "react";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center">
      <img className="w-8 h-8 mr-3" src={logo} />
      <p>Shezonga</p>
    </div>
  );
}

export default Logo;
