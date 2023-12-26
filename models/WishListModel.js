const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
  brandId: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  instrumentType: {
    type: String,
    required: true
  },
  noOfStrings: {
    type: String,
    required: true
  },
  soundScape: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("WishList", wishListSchema);
