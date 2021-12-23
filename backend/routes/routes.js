const Router = require("express").Router();
const validator = require("../config/validator");

const passport = require("../config/passport");

const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const usersControllers = require("../controllers/usersControllers");
const commentsControllers = require("../controllers/commentsControllers");
const activitiesControllers = require("../controllers/activityControllers");

const { getAllCities, getCity, addCity, deleteCity, modifyCity } =
  citiesControllers;

const {
  getAllItineraries,
  getItinerary,
  addItinerary,
  deleteItinerary,
  modifyItinerary,
  getItineraryByCity,
  LikeAndDislike,
} = itinerariesControllers;

const { newUser, accessAccount, accessWithToken, getAllUsers } =
  usersControllers;

const { addComment, getComments, updateComment, deleteComment } =
  commentsControllers;

const {
  addActivity, activityOfItinerary
} = activitiesControllers;

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

Router.route("/users").get(getAllUsers);

// comentarios
Router.route("/itineraries/comments/:id")
  .post(passport.authenticate("jwt", { session: false }),addComment)
  .put(passport.authenticate("jwt", { session: false }),updateComment)
  .get(getComments)

Router.route("/itineraries/comments/:idItinerary/:idComment")
.delete(passport.authenticate("jwt", { session: false }), deleteComment);

// likes

Router.route("/itinerary/likes").put(passport.authenticate("jwt", { session: false }), LikeAndDislike);

/////////////////////////////////////////////////////

// Activities
Router.route("/activities")
  .post(addActivity)

//Individual
Router.route('/activities/:itineraryId')
.get(activityOfItinerary)

//Activity de un itinerario especifico

module.exports = Router;
