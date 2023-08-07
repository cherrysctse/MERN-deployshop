const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const prouctSchema = new Schema({
  product: { type: String, required: true },
  price: { type: Number, required: true },
});

// This Activity creates the collection called productmodels
const Productmodel = mongoose.model("Productmodel", prouctSchema);
module.exports = Productmodel;