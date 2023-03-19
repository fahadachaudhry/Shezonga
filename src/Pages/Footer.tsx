import React from "react";
import Logo from "../components/Logo";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import footer from "../assets/footer.jpg";

function Footer() {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          height: "600px",
          backgroundImage: `url(${footer})`,
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 flex items-start justify-between flex-wrap lg:flex-nowrap">
        <div className="w-full pb-10 lg:w-4/12 ">
          <div className="text-2xl font-semibold mb-4">
            <Logo />
          </div>
          <p className="text-sm text-zinc-400">Copyright ©Shezonga 2022</p>
          <p className="text-sm text-zinc-400 mb-4">All rights reserved</p>
          <div className="flex items-center justify-start">
            <p className="mr-4">
              <FaFacebookF />
            </p>
            <p className="mr-4">
              <BsTwitter />
            </p>
            <p className="mr-4">
              <FaInstagram />
            </p>
          </div>
        </div>
        <div className="w-full pb-10 lg:w-2/12">
          <p className="text-sm text-zinc-500 mb-4 uppercase">Menu</p>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            Industries
          </a>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            Services
          </a>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            Case Studies
          </a>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            Case Careers
          </a>
        </div>
        <div className="w-full pb-10 lg:w-2/12">
          <p className="text-sm text-zinc-500 mb-4 uppercase">Contact</p>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            103 Bartlett St.
          </a>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            Austin, TX
          </a>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            United States
          </a>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            78-704-5159
          </a>
        </div>
        <div className="w-full lg:w-4/12">
          <p className="text-sm text-zinc-500 mb-4 uppercase">Newsletter</p>
          <p className="text-sm text-zinc-400 mb-4">
            Subscribe and be the first to receive all the latest insights.
          </p>
          <div className="flex w-full items-center justify-between">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-10 p-2 bg-zinc-100 border border-zinc-200 text-sm outline-none"
            />
            <button className="h-10 w-10 bg-violet-600 border border-violet-200 flex items-center justify-center">
              <BiSearchAlt2 className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
