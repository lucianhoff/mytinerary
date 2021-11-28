let citiesArrayyyyy = [
  {
    cityName: "Tokyo",
    countryName: "Japan",
    description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
    image: "Tokyo",
    curreny: "Yen (¥, JPY)",
    language: "Japanese"
  },
  {
    cityName: "Osaka",
    countryName: "Japan",
    image: "Osaka",
    curreny: "Yen (¥, JPY)",
    language: "Japanese",
    description: "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food."
  },
  {
    cityName: "Shanghai",
    countryName: "China",
    image: "Shanghai",
    curreny: "Yuan (¥, CNY)",
    language: "Chinese",
    description: "Shanghai, on China’s central coast, is the country's biggest city and a global financial hub.",
  },
  {
    cityName: "Bangkok",
    countryName: "Thailand",
    image: "Bangkok",
    curreny: "Baht (฿, THB)",
    language: "Thai",
    description: "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life",
  },
  {
    cityName: "Berlin",
    countryName: "Germany",
    image: "Berlin",
    curreny: "Euro (€, EUR)",
    language: "German",
    description:"Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains.",
  },
  {
    cityName: "Moscow",
    countryName: "Russia",
    image: "Moscow",
    curreny: "Ruble (₽, RUB)",
    language: "Russian",
    description: "Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury.",
  },
  {
    cityName: "London",
    countryName: "UK",
    image: "London",
    curreny: "Pound (£, GBP)",
    language: "English",
    description:"London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. ",
  },
  {
    countryName: "France",
    cityName: "Paris",
    image: "Paris",
    curreny: "Euro (€, EUR)",
    language: "French",
    description:"Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
  },
  {
    countryName: "Mexico",
    cityName: "Guadalajara",
    image: "Guadalajara",
    curreny: "Peso (, MXN)",
    language: "Spanish",
    description:"Guadalajara is a city in western Mexico. It’s known for tequila and mariachi music, both born in Jalisco, the state of which Guadalajara is the capital.",
  },
  {
    countryName: "Argentina",
    cityName: "Buenos Aires",
    image: "BuenosAires",
    curreny: "Peso (AR$, ARS)",
    language: "Spanish",
    description:"Buenos Aires is Argentina’s big, cosmopolitan capital city. Its center is the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balconied presidential palace.",
  },
  {
    countryName: "Brazil",
    cityName: "Rio de Janeiro",
    image: "RioDeJaneiro",
    curreny: "Real (R$, BRL)",
    language: "Portuguese",
    description:"Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit.",
  },
  {
    countryName: "Peru",
    cityName: "Lima",
    image: "Lima",
    curreny: "Sol (S/, PEN)",
    language: "Spanish",
    description:"Lima, the capital of Peru, lies on the country's arid Pacific coast. Though its colonial center is preserved, it's a bustling metropolis and one of South America’s largest cities.",
  },
  {
    countryName: "Uruguay",
    cityName: "Punta del Este",
    image: "PuntaDelEste",
    curreny: "Peso ($, UYU)",
    language: "Spanish",
    description:"Punta del Este is a city and seaside resort on the Atlantic Coast in the Maldonado Department of southeastern Uruguay.",
  },
  {
    countryName: "Greece",
    cityName: "Athens",
    image: "Athens",
    curreny: "Euro (€, EUR)",
    language: "Greek",
    description:"Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire.",
  },
  {
    countryName: "United Arab Emirates",
    cityName: "Dubai",
    image: "Dubai",
    curreny: "Dirham (د.إ, AED)",
    language: "Arabic",
    description:"Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.",
  },
];

const City = require('../models/City')

const citiesControllers = {
  getAllCities: async(req, res) => {
    let cities
    let error = null

    try { 
      cities = await City.find()
    }catch(err) {
      error = err 
      console.log(error)
    }

    res.json({
      response: error ? 'ERROR' : cities, 
      success: error ? false : true,
      error: error
    })

  },
  addCity: (req, res) => {
    const {cityName, countryName, image, curreny, language, description} = req.body
    new City({cityName, countryName, image, curreny, language, description}).save()
    .then((response) => res.json({response}))
  },
  getCity: async(req, res) => {

    let cities
    const id = req.params.id

    try {
      cities = await City.findOne({_id:id})
    } catch(err) {
      console.log(err)
    }

    res.json({response: cities, success: true})
    
  },
  deteleCity: async(req, res) => {

    const id = req.params.id
    let cities
    try {
      await City.findOneAndDelete({_id:id})
      cities = await City.find()
    } catch(err) {
      console.log(err)
    }

    res.json({response: cities, success: true})
  },
  modifyCity: async(req, res) => {
    let id = req.params.id
    let cities = req.body
    let update
    console.log(cities);
    try { 
      update = await City.findOneAndUpdate({_id:id}, cities, {new:true})
      console.log(update)
    } catch(err) {
      console.log(err)
    }
    res.json({success:update ? true : false})
  }

};
module.exports = citiesControllers;
