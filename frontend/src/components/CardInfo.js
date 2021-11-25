import React from "react";
import "../style.css";
import "animate.css";

const CardInfo = () => {
  const usersPrefer = [
    {
      cityName: "Tokyo",
      countryName: "Japan",
      image: "./assets/japan-tokyo.jpg",
      description:
        "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
    },
    {
      cityName: "Osaka",
      countryName: "Japan",
      image: "./assets/japan-osaka.jpg",
      description:
        "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food.",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center mt-22 ">
        <div className="flex-col">
          {usersPrefer.map((city) => {
            return (
              <div
                key={city.cityName}
                className="animate__animated animate__flipInX mb-20"
              >
                <div className="card-main bg-purple-500 kanji flex items-center rounded-lg justify-evenly-col sm:justify-center lg:flex-row">
                  <div className="card-main__img">
                    <img src={city.image} alt={city.cityName} />
                  </div>
                  <div className="card-main__info text-white">
                    <h2 className="card-main__title text-3xl font-bold  ">
                      {city.cityName}
                    </h2>
                    <h3 className="text-xl font-bold">{city.countryName}</h3>
                    <p className="card-main__text py-3 text-white">
                      {city.description}
                    </p>
                    <button className="custom-btn btn-14" to="/cities">
                      See more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardInfo;
