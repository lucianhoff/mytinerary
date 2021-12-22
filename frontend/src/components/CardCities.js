import React from "react";
import "../style.css";
import "animate.css";
import "../sass/Button.scss";
import { Link } from "react-router-dom";


const CardCities = ( { arrayCitiesCard } ) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex-col">
            {arrayCitiesCard && (arrayCitiesCard).map((city) => {
              return (
                <div
                  key={city.cityName}
                  className="animate__animated animate__flipInX mb-20"
                >
                  <div className="card-main bg-purple-500 flex items-center rounded-lg justify-evenly-col sm:justify-center lg:flex-row">
                    <div className="card-main__img">
                      <img
                        src={city.image}
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
                      <Link to={`/cities/${city._id}`} className="custom-btn btn-14 pt-1" >See more</Link>
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
