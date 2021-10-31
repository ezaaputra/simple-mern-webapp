const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: String,
    qty: Number,
    price: Number
  }
);

module.exports = mongoose.model('Products', ProductSchema)