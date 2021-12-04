const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')

const {getAllCities, getCity, addCity, deleteCity, modifyCity} = citiesControllers;
const {getAllItineraries, getItinerary, addItinerary, deleteItinerary, modifyItinerary, getItineraryByCity} = itinerariesControllers;

Router.route('/cities')
 .get(getAllCities)
 .post(addCity)

Router.route('/cities/:id')
 .get(getCity)
 .delete(deleteCity)
 .put(modifyCity)

Router.route('/itineraries')
 .get(getAllItineraries)
 .post(addItinerary)
 
Router.route('/itineraries/:id')
  .get(getItinerary)
  .delete(deleteItinerary)
  .put(modifyItinerary)

Router.route('/itinerarycity/:idCity')
  .get(getItineraryByCity)

 module.exports = Router