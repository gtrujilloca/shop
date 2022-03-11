const { mongoose } = require('mongoose');
const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
  name: { type: String, required: true, maxlength: 100},
  description: { type: String, required: true, maxlength: 300},
  imageUrl: { type: String, required: true},
  price: { type: Number, required: true},
});

module.exports = mongoose.model('Product',ProductSchema);