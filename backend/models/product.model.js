const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
}, { Timestamp: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;