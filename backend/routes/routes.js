const Router = require("express").Router();
const validator = require("../config/validator");

const passport = require("../config/passport");

const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const usersControllers = require("../controllers/usersControllers");
const commentsController = require("../controllers/commentsController");

const { getAllCities, getCity, addCity, deleteCity, modifyCity } =
  citiesControllers;
const {
  getAllItineraries,
  getItinerary,
  addItinerary,
  deleteItinerary,
  modifyItinerary,
  getItineraryByCity,
  addLike,
  removeLike
} = itinerariesControllers;

const { newUser, accessAccount, accessWithToken } = usersControllers;

const { addComment, getComments, updateComment, deleteComment } = commentsController;

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
)

// comentarios 
Router.route("/itineraries/comments/:id")
  .post(addComment)
  .get(getComments)
  .put(updateComment)
  
Router.route("/itineraries/comments/:idItinerary/:idComment") 
  .delete(deleteComment)

// likes 

Router.route("/itinerary/like")
  .put(addLike)

Router.route("/itinerary/dislike")
  .put(removeLike)

module.exports = Router;
