const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')

const {getAllCities, getCity, addCity, deleteCity, modifyCity} = citiesControllers;
const {getAllItineraries, getItinerary, addItinerary, deleteItinerary, modifyItinerary} = itinerariesControllers;

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


 module.exports = Router

//  61a6d6b290c900c778d2fd0d
//  61a6d68d90c900c778d2fd0b