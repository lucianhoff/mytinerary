import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import '../style.css'

const Itenirary = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="flex flex-col justify-center shadow-lg rounded-t-lg rounded-b-lg bg-purple-600">
        <div className="relative flex justify-center flex-col rounded-t-lg md:flex-row md:space-x-5 space-y-3 md:space-y-0   p-3 max-w-xs md:max-w-3xl mx-auto bg-purple-600 ">
          <div className="w-full md:w-1/2 bg-purple-600 grid place-items-center">
            <img
              src="https://images.pexels.com/photos/5197157/pexels-photo-5197157.jpeg?cs=srgb&dl=pexels-christiano-sinisterra-5197157.jpg&fm=jpg"
              alt="pic"
              className="rounded-xl"
            />
            <div className="flex justify-center aling-center items-center my-3">
              <div
                className="h-10 rounded-full bg-white w-10 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?cs=srgb&dl=pexels-cats-coming-1543793.jpg&fm=jpg)",
                }}
              >
                {" "}
              </div>
              <p className="pl-5 text-white font-bold rubik text-xl">
                {" "}
                Lucianhoff{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/3 bg-purple-600 flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="flex">
                <div className="mx-1 bg-purple-400 px-3 py-1 rounded-full text-xs font-medium text-white hidden md:block">
                  #Travel
                </div>
                <div className="mx-1 bg-purple-400 px-3 py-1 rounded-full text-xs font-medium text-white hidden md:block">
                  #Tokyo
                </div>
                <div className="mx-1 bg-purple-400 px-3 py-1 rounded-full text-xs font-medium text-white hidden md:block">
                  #Test
                </div>
              </div>
            </div>
            <h3 className="font-black rubik text-white md:text-2xl text-xl">
              Travel to Kyoto
            </h3>
            <p className="md:text-lg text-white font-bold">Price: $$$</p>
            <p className="md:text-lg text-white font-bold">Duration: 2 hours</p>
          </div>
        </div>
        {display && (
          <div className="my-5 px-auto bg-purple-600">

            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center align-center">
                <img src="/assets/city/under-construction.png" className="under-construction"/>
              </div>
              <h3 className="text-3xl rubik text-white font-bold">
                Under Construction
              </h3>
            </div>

          </div>
        )}
        <div className="z-50 p-2 px-3 bg-purple-600 sm:m-2.5 md:m-0 flex md:flex-row aling-center items-center justify-between sm:flex-row rounded-b-lg">
          <div className="flex justify-center align-center items-center">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white font-bold text-xl">0</span>
          </div>
          <div>
            {display ? (
              <FaAngleUp
                onClick={handleDisplay}
                className="text-white text-3xl"
              />
            ) : (
              <FaAngleDown
                onClick={handleDisplay}
                className="text-white text-3xl"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Itenirary;
