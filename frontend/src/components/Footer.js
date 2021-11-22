import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <div className="flex justify-center items-center bg-purple-600 py-5">
      <div className="text-white flex flex-col">
        <div className="flex justify-evenly items-center text-2xl font-bold">
          <a href="" className="hover:text-purple-300">
            Home
          </a>
          <a href="" className="hover:text-purple-300">
            Cities
          </a>
        </div>
        <div className="flex items-center justify-evenly text-2xl py-10">
          <a href="" className="hover:text-purple-300">
            <FaGithub />
          </a>
          <a href="" className="hover:text-purple-300">
            <FaInstagram />
          </a>
          <a href="" className="hover:text-purple-300">
            <FaTwitter />
          </a>
        </div>
        <div className="flex items-center justify-evenly">
          <p className="text-center">
            &copy; {year} MyTinerary Inc. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
