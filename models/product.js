// // Define schema
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    category: String,
    inStock: { type: Boolean, default: true },
     slug: { type: String, unique: true, required: true } 
});

// Compile Product model from schemaa
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
