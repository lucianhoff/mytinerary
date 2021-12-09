const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    userName: { type: String, required: true },
    userImage: { type: String, required: true },
    price: { type: Number, required: true },
    duration: {type: Number, required: true},
    likes: {type: Number, required: true},
    hashtags: [{type: String, required: true}],
    comments: { type: String },
    coverpage: { type: String, required: true},
    cityRelated: { type:mongoose.Types.ObjectId, ref:'city' }
});

const itinerary = mongoose.model("itinerary", itinerarySchema);
module.exports = itinerary;