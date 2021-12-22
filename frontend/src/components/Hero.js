import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center md:justify-evenly items-center py-20 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8 sm:flex-col md:flex-row">
      <div className="md:ml-10 flex justify-center items-center flex-col py-10 sm:text-center lg:text-left">
        <h1 className="text-4xl  text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">My</span>
          <span className="block text-purple-600 xl:inline">Tinerary</span>
        </h1>
        <p className="py-3 text-center text-gray-500 px-0 mx-0 w-full sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
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
        <img className="h-80" src="https://by3301files.storage.live.com/y4mROWNTeEIMxevQHkHXl8pTVBVQvN6_l5t_SZC-wOJYidSN9Ty6FwP5yVAallGTBpsaqhSv6umJMvt8kfooEFyhk-91A6ZiRvSo3SLxOSsz0rIabSLf8fOLGK15cur_-6G0Zm3tskZDVyJKMNSQTDP_mGYuZgo3E76SxJBUlz-Tu0s2yHoIq81klPFZ6oiKRIW?width=1596&height=1900&cropmode=none" alt="airplane"/>
      </div>
    </div>
  );
};

export default Hero;
