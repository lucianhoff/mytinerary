import { Carousel, Card, Row, Col } from "react-bootstrap";
import "../style.css";
import CardCarousel from "./CardCarousel";

const Slider = () => {
  const citiesArray1 = [
    {
      country: "Japan",
      cityName: "Tokyo",
      description:
        "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
      image: "Tokyo",
    },
    {
      country: "Japan",
      cityName: "Osaka",
      description:
        "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food.",
      image: "Osaka",
    },
  ];

  const citiesArray2 = [
    {
      country: "China",
      cityName: "Shangai",
      description:
        "Shanghai, on China’s central coast, is the country's biggest city and a global financial hub.",
      image: "Shangai",
    },
    {
      country: "Thailand",
      cityName: "Bangkok",
      description:
        "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life",
      image: "Bangkok",
    },
  ];

  // console.log(citiesOne);

  return (
    <Carousel className="pb-10 sm:px-20 md:px-32 lg:px-44 w-full">
      <Carousel.Item>
        <div className="flex justify-center items-center">
          <div className="">
            {citiesArray1.map((city) => {
              return <CardCarousel city={city} />;
            })}
          </div>

          <div>
            {citiesArray2.map((city) => {
              return <CardCarousel city={city} />;
            })}
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="flex justify-center items-center">
          <div>
            {citiesArray2.map((city) => {
              return <CardCarousel city={city} />;
            })}
          </div>

          <div>
            {citiesArray1.map((city) => {
              return <CardCarousel city={city} />;
            })}
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
