import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../style.css";

import { connect } from "react-redux";
import itineraryAction from "../redux/actions/itinerariesAction";

const Itenirary = ({ itinerary }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  let price = [];

  for (let index = 0; index < itinerary.price; index++) {
    price.push(
      <div>
        <img src="/assets/price.png" className="dollar" />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center shadow-lg rounded-t-lg rounded-b-lg bg-purple-600 mt-5">
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
                  backgroundImage: `url(${itinerary.userImage}`,
                }}
              >
                {" "}
              </div>
              <p className="pl-5 text-white font-bold rubik text-xl">
                {" "}
                {itinerary.userName}{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/3 bg-purple-600 flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="flex">
                {itinerary.hashtags.map((hashtag) => {
                  return (
                    <div className="mx-1 bg-purple-400 px-3 py-1 rounded-full text-smeee font-medium text-white hidden md:block">
                      #{hashtag}
                    </div>
                  );
                })}
              </div>
            </div>
            <h3 className="font-black rubik text-white md:text-2xl text-xl">
              {itinerary.title}
            </h3>
            <div className="md:text-lg text-white font-bold flex align-center items-center">
              Price:
              {price.map((billete) => {
                return <div className="mx-1"> {billete} </div>;
              })}
            </div>
            <p className="md:text-lg text-white font-bold">
              Duration: {itinerary.duration} hours
            </p>
          </div>
        </div>
        {display && (
          <div className="my-5 px-auto bg-purple-600 transition-all">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center align-center">
                <img
                  src="/assets/city/under-construction.png"
                  className="under-construction"
                />
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
            <span className="text-white font-bold text-xl">
              {" "}
              {itinerary.likes}
            </span>
          </div>
          <div>
            {display ? (
              <div className="flex" onClick={handleDisplay}>
                  <span className="text-white font-bold text-xl cursor-pointer hover:text-purple-300">View Less</span>
                <FaAngleUp
                  
                  className="text-white text-3xl"
                />
              </div>
            ) : (
              <div className="flex" onClick={handleDisplay}>
                <span className="text-white font-bold text-xl cursor-pointer hover:text-purple-300">View More</span>
              <FaAngleDown
                
                className="text-white text-3xl"
              />
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  getItineraryByCity: itineraryAction.getItineraryByCity,
};

export default connect(null, mapDispatchToProps)(Itenirary);
