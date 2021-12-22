import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center items-center bg-purple-600 py-5">
        <div className="text-white flex flex-col">
          <div className="flex justify-evenly items-center text-2xl font-bold">
            <Link to="/" className="hover:text-purple-300">
              Home
            </Link>
            <Link to="/cities" className="hover:text-purple-300">
              Cities
            </Link>
          </div>
          <div className="flex items-center justify-evenly text-2xl py-10">
            <a href="https://twitter.com/home" target="_blank" className="hover:text-purple-300">
            <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="hover:text-purple-300">
            <FaInstagram />
            </a>
            <a href="https://github.com/lucianhoff" target="_blank" className="hover:text-purple-300">
            <FaGithub />
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
