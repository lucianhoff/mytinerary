const CardCarousel = ( { city } ) => {
  
  const { country, cityName, image } = city;

  return (
    
      <div className="cardCountry p-2">
        <figure>
          <img src={image} alt="" />
          <div className="layer center">
            <h3 className="text-city">{cityName}</h3>
            <p className="text-country">{country}</p>
          </div>
        </figure>
      </div>
    
  );
};

export default CardCarousel;
