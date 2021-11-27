const cities = [
  {
    countryName: "Japan",
    cityName: "Tokyo",
    description:
      "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
    image: "Tokyo",
    id: 0,
  },
  {
    countryName: "Japan",
    cityName: "Osaka",
    description:
      "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food.",
    image: "Osaka",
    id: 1,
  },
  {
    countryName: "China",
    cityName: "Shanghai",
    description:
      "Shanghai, on China’s central coast, is the country's biggest city and a global financial hub.",
    image: "Shanghai",
    id: 2,
  },
  {
    countryName: "Thailand",
    cityName: "Bangkok",
    description:
      "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life",
    image: "Bangkok",
    id: 3,
  },
  {
    countryName: "Germany",
    cityName: "Berlin",
    description:
      "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains.",
    image: "Berlin",
    id: 4,
  },
  {
    countryName: "Russia",
    cityName: "Moscow",
    description:
      "Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury.",
    image: "Moscow",
    id: 5,
  },
  {
    countryName: "UK",
    cityName: "London",
    description:
      "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. ",
    image: "London",
    id: 6,
  },
  {
    countryName: "France",
    cityName: "Paris",
    description:
      "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
    image: "Paris",
    id: 7,
  },
  {
    countryName: "Mexico",
    cityName: "Guadalajara",
    description:
      "Guadalajara is a city in western Mexico. It’s known for tequila and mariachi music, both born in Jalisco, the state of which Guadalajara is the capital.",
    image: "Guadalajara",
    id: 8,
  },
  {
    countryName: "Argentina",
    cityName: "Buenos Aires",
    description:
      "Buenos Aires is Argentina’s big, cosmopolitan capital city. Its center is the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balconied presidential palace.",
    image: "BuenosAires",
    id: 9,
  },
  {
    countryName: "Brazil",
    cityName: "Rio de Janeiro",
    description:
      "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit.",
    image: "RioDeJaneiro",
    id: 10,
  },
  {
    countryName: "Peru",
    cityName: "Lima",
    description:
      "Lima, the capital of Peru, lies on the country's arid Pacific coast. Though its colonial center is preserved, it's a bustling metropolis and one of South America’s largest cities.",
    image: "Lima",
    id: 11,
  },
  {
    countryName: "Uruguay",
    cityName: "Punta del Este",
    description:
      "Punta del Este is a city and seaside resort on the Atlantic Coast in the Maldonado Department of southeastern Uruguay.",
    image: "PuntaDelEste",
    id: 12,
  },
  {
    countryName: "Greece",
    cityName: "Athens",
    description:
      "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire.",
    image: "Athens",
    id: 13,
  },
  {
    countryName: "United Arab Emirates",
    cityName: "Dubai",
    description:
      "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.",
    image: "Dubai",
    id: 14,
  },
];

const citiesControllers = {
  getAllCities: (req, res) => {
    res.json({ response: cities });
  },

  loadCity: (req, res) => {
    res.json({ response: cities });
  },
  getCity: (req, res) => {
    const id = req.params.id;
    const city = cities.find((city) => city.id.toString() === id);
    res.json({ response: { city } });
  },
};
module.exports = citiesControllers;
