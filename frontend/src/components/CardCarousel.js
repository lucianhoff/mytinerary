const CardCarousel = ({ city }) => {
  const { country, cityName, image } = city;

  const imageSrc = `./assets/cities/city${image}.jpg`;

  return (
    <div class="cardCountry p-2">
      <figure>
        <img src={imageSrc} alt="" />
        <div class="layer center">
          <h3 class="text-city">{cityName}</h3>
          <p class="text-country">{country}</p>
        </div>
      </figure>
    </div>
  );
};

export default CardCarousel;
