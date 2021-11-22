import React from "react";
import "../style.css";
import "animate.css";

const CardInfo = () => {
  return (
    <>
      <div className="flex-col">
        <div className="animate__animated animate__flipInX sm:pb-5">
          <div className="card-main bg-purple-500 kanji flex items-center rounded-lg justify-evenly-col sm:justify-center lg:flex-row">
            <div className="card-main__img">
              <img src="./assets/japan-tokyo.jpg" alt="tokyo"/>
            </div>
            <div className="card-main__info text-white">
              <h2 className="card-main__title text-3xl font-bold  ">Tokyo</h2>
              <h3 className="text-xl font-bold">Japan</h3>
              <p className="card-main__text py-3 text-white">
              Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.
              </p>
              <button class="custom-btn btn-14">See more</button>
            </div>
          </div>
        </div>

        <div className="card-main sm:my-5 bg-purple-500 kanji flex items-center rounded-lg justify-evenly-col sm:justify-center lg:flex-row  card-sm__responsive">
          <div className="card-main__img">
            <img src="./assets/japan-osaka.jpg" alt="Osaka"/>
          </div>
          <div className="card-main__info text-white">
            <h2 className="card-main__title text-3xl font-bold  ">Osaka</h2>
            <h3 className="text-xl font-bold">Japan</h3>
            <p className="card-main__text py-3 text-white">
            Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food.
            </p>
            <button class="custom-btn btn-14">See more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
