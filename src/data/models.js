const mongoose = require("mongoose");

const Recipe = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Recipe", Recipe);
