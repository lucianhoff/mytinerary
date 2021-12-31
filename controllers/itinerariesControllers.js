const Itinerary = require("../models/Itinerary");

const itinerariesControllers = {
  getAllItineraries: async (req, res) => {
    let itineraries;
    let error = null;

    try {
      itineraries = await Itinerary.find().populate("cityRelated");
      
    } catch (err) {
      error = err;
      console.log(error);
    }

    res.json({
      response: error ? "ERROR" : itineraries,
      success: error ? false : true,
      error: error,
    });
  },
  addItinerary: (req, res) => {
    const {
      title,
      userName,
      userImage,
      price,
      duration,
      likes,
      hashtags,
      commets,
      cityRelated,
    } = req.body;
    new Itinerary({
      title,
      userName,
      userImage,
      price,
      duration,
      likes,
      hashtags,
      commets,
      cityRelated,
    })
      .save()
      .then((response) => res.json({ response }))
      .catch((err) => {
        console.log(err);
      });
  },
  getItinerary: async (req, res) => {
    let itineraries;
    const id = req.params.id;

    try {
      itineraries = await Itinerary.findOne({ _id: id }).populate(
        "cityRelated"
      );
    } catch (err) {
      console.log(err);
    }

    res.json({ response: itineraries, success: true });
  },
  deleteItinerary: async (req, res) => {
    const id = req.params.id;
    let itinerary;
    try {
      await Itinerary.findOneAndDelete({ _id: id });
      itinerary = await Itinerary.find();
    } catch (err) {
      console.log(err);
    }

    res.json({ response: itinerary, success: true });
  },
  modifyItinerary: async (req, res) => {
    let id = req.params.id;
    let itineraries = req.body;
    let update;
    try {
      update = await Itinerary.findOneAndUpdate({ _id: id }, itineraries, {
        new: true,
      });
    } catch (err) {
      console.log(err);
    }
    res.json({ success: update ? true : false });
  },
  getItineraryByCity: async (req, res) => {
    try {
      const cityItinerary = await Itinerary.find({
        cityRelated: req.params.idCity,
      });
      res.json({ response: cityItinerary });
    } catch (err) {
      console.log(err);
    }
  },
  LikeAndDislike: async (req, res) => {
    const { itineraryId, userId, bool } = req.body;
    try {
      const itinerary = await Itinerary.findOneAndUpdate(
        { _id: itineraryId },
        bool 
        ? { $addToSet: { likes: userId } } 
        : { $pull: { likes: userId } },
        { new: true }
      );
      res.json({ success: true, response: itinerary, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
};

module.exports = itinerariesControllers;
