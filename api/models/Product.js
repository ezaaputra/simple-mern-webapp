const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  }
);

module.exports = mongoose.model('Products', ProductSchema)