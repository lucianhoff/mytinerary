import React from "react";
import {Link} from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <div className="footer flex justify-center items-center bg-purple-600 py-5">
      <div className="text-white flex flex-col">
        <div className="flex justify-evenly items-center text-2xl font-bold">
          <Link to="/" className="hover:text-purple-300">
            Home
          </Link>
          <Link to="/cities" clLinkssName="hover:text-purple-300">
            Cities
          </Link>
        </div>
        <div className="flex items-center justify-evenly text-2xl py-10">
          <Link to="" className="hover:text-purple-300">
            <FaGithub />
          </Link>
          <Link to="" className="hover:text-purple-300">
            <FaInstagram />
          </Link>
          <Link to="" className="hover:text-purple-300">
            <FaTwitter />
          </Link>
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
