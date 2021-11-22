import { Carousel } from "react-bootstrap";
import "../style.css";
import CardCarousel from "./CardCarousel";

const Slider = () => {
  const cities = [
    [
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
    ],
    [
      {
        country: "Germany",
        cityName: "Berlin",
        image: "Berlin"
      },
      {
        country: "Russia",
        cityName: "Moscow",
        image: "Moscow"
      },
      {
        country: "UK",
        cityName: "London",
        image: "London"
      },
      {
        country: "France",
        cityName: "Paris",
        image: "Paris"
      },
    ],
    [
      {
        country: "Mexico",
        cityName: "Guadalajara",
        image: "Guadalajara"
      },
      {
        country: "Argentina",
        cityName: "Buenos Aires",
        image: "BuenosAires"
      },
      {
        country: "Brazil",
        cityName: "Rio de Janeiro",
        image: "RioDeJaneiro"
      },
      {
        country: "Peru",
        cityName: "Lima",
        image: "Lima"
      },
    ]
  ];

  return (
    <Carousel className="pb-10 sm:px-20 md:px-32 lg:px-44 w-full">
      {cities.map((cityAux) => {
        return (
          <Carousel.Item>
            <div className="carouse_custom_item">
                {cityAux.map((city) => {
                 return <CardCarousel city={city} />;
                })}
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
