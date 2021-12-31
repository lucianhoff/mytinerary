const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  cityName: { type: String, required: true },
  countryName: { type: String, required: true },
  image: { type: String, required: true },
  currency: { type: String, required: true },
  language: { type: String, required: true },
  description: { type: String, required: true }
});

const City = mongoose.model("city", citySchema);

module.exports = City;