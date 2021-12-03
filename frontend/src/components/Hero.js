import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full flex justify-evenly items-center py-20 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8 sm:flex-col md:flex-row">
      <div className="ml-10 flex justify-center w-1/4 items-center flex-col py-10 sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">My</span>
          <span className="block text-purple-600 xl:inline">Tinerary</span>
        </h1>
        <p className="py-3 text-center text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
        <div className="flex justify-center">
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link
              to="/cities"
              className="w-full flex items-center justify-center px-8 py-3 text-gray-50 rounded-md  bg-purple-600 hover:bg-purple-800 hover:text-gray-50 font-bold md:py-4 md:text-lg md:px-10"
            >
              Cities
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img className="h-80" src="./assets/airplane-only-w.png" alt="airplane"/>
      </div>
    </div>
  );
};

export default Hero;
