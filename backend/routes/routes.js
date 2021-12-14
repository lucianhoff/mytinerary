const Router = require("express").Router();
const validator = require("../config/validator");

const passport = require("../config/passport");

const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const usersControllers = require("../controllers/usersControllers");

const { getAllCities, getCity, addCity, deleteCity, modifyCity } =
  citiesControllers;
const {
  getAllItineraries,
  getItinerary,
  addItinerary,
  deleteItinerary,
  modifyItinerary,
  getItineraryByCity,
} = itinerariesControllers;
const { newUser, accessAccount, accessWithToken } = usersControllers;

Router.route("/cities").get(getAllCities).post(addCity);

Router.route("/cities/:id").get(getCity).delete(deleteCity).put(modifyCity);

Router.route("/itineraries").get(getAllItineraries).post(addItinerary);

Router.route("/itineraries/:id")
  .get(getItinerary)
  .delete(deleteItinerary)
  .put(modifyItinerary);

Router.route("/itinerarycity/:idCity").get(getItineraryByCity);

Router.route("/user/signup").post(validator, newUser);

Router.route("/user/signin").post(accessAccount);

Router.route("/user/signin/token").post(
  passport.authenticate("jwt", { session: false }),
  accessWithToken
);

module.exports = Router;
