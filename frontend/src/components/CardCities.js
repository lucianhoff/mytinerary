import React, { useEffect, useState } from "react";
import "../style.css";
import "animate.css";
import "../sass/Button.scss";
import { Link } from "react-router-dom";
import { regex } from './regex.js';


const CardCities = ( { citiesArray } ) => {

  const [cities, setCities] = useState(citiesArray)

  console.log(cities)

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex-col">
            {cities && cities.map((city) => {
              return (
                <div
                  key={city.cityName}
                  className="animate__animated animate__flipInX mb-20"
                >
                  <div className="card-main bg-purple-500 flex items-center rounded-lg justify-evenly-col sm:justify-center lg:flex-row">
                    <div className="card-main__img">
                      <img
                        src={`./assets/cities/city${city.image}.jpg`}
                        alt={city.cityName}
                      />
                    </div>
                    <div className="card-main__info text-white">
                      <h2 className="card-main__title text-3xl font-bold  ">
                        {city.cityName}
                      </h2>
                      <h3 className="text-xl font-bold">{city.countryName}</h3>
                      <p className="card-main__text py-3 text-white">
                        {city.description}
                      </p>
                      <Link to={`/cities/${city.id}`} className="custom-btn btn-14 text-center" >Ver elemento</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCities;
