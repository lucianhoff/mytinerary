const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    itienerary: {type: mongoose.Types.ObjectId, ref: "itinerary"}
})

const Activity = mongoose.model('activity', ActivitySchema)

module.exports = Activity;