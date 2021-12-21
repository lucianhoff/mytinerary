const Activity = require("../models/Activity");

const activityControllers = {
  getActivities: async (req, res) => {
    try {
      let activity = await Activity.find().populate("itinerary");
      res.json({ success: true, response: activity });
    } catch (error) {
      console.log(error);
    }
  },
  addActivities: async (req, res) => {

    let newActivity = new Activity({ ...req.body})

    try {
      await newActivity.save()
      res.json( { success: true, activity: newActivity} )
    } catch (error) {
      console.log(error)
    }

  },
  getActivity: async (req, res) => {
    let activity;
    const { id } = req.params;
    try {
      activity = await Activity.findOne({ _id: id }).populate("itinerary");
      res.json({ success: true, response: activity });
    } catch (error) {
      console.log(error);
    }
  },
  updateActivity: async (req, res) => {
    const { id } = req.params;
    try {
      const activity = await Activity.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json({ success: true, response: activity });
    } catch (error) {
      console.log(error);
    }
  },
  deleteActivity: async (req, res) => {
    const { id } = req.params;
    try {
      await Activity.findOneAndDelete({ _id: id });
      const activity = await Activity.find();
      res.json({ success: true, response: activity });
    } catch (error) {
      console.log(error);
    }
  },
  getActivityTheCity: async (req, res) => {
    const { idItinerary } = req.params;
    try {
      const itinerary = await Activity.find({ itinerary: idItinerary });
      res.json({ success: true, response: activity });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = activityControllers;
