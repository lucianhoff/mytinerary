import React, { useEffect, useState } from "react";
import "../style.css";
import "animate.css";

const CardCities = () => {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setCities(data.response.cities))
      .catch((error) => console.log(error));
  }, []);

  const [filtrarCiudad, setFiltrarCiudad] = useState('')

  const buscarCiudad = (e) => {
    setFiltrarCiudad((e.target.value).toLowerCase())
    console.log(e.target.value)
  }

  let buscarFiltrado = cities.filter(
    (ciudad) =>
      ciudad.cityName.toLowerCase().includes(filtrarCiudad.toLowerCase()) ||
      ciudad.countryName.toLowerCase().includes(filtrarCiudad.toLowerCase())
  );

  let filtradoDos = buscarFiltrado.filter(ciudad => ciudad.cityName.toLowerCase().startsWith(filtrarCiudad) || ciudad.countryName.toLowerCase().startsWith(filtrarCiudad))

  return (
    <>
      <div className="flex flex-col">
        <div className="mt-5 flex items-center justify-center flex-col mb-24">
          <label
            className="rubik block text-purple-600 text-3xl font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inputPlace"
          >
            Filter by Cities
          </label>
          <input
            type="text"
            name="inputPlace"
            id="x"
            placeholder="Tokyo"
            onChange={buscarCiudad}
            className="input rubik text-center mt-4 w-1/4 bg-white appearance-none border-2 border-purple-900 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-600"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex-col">
            {filtradoDos.map((city) => {
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
      </div>
    </>
  );
};

export default CardCities;
