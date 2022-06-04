const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
  name: { type: String, required: true, maxlength: 100, minlength: 3 },
  description: { type: String, required: true, maxlength: 300, minlength: 5 },
  imageUrl: { type: String, required: true, minlength: 10, match: /^(http:\/\/|https:\/\/)/},
  price: { type: Number, required: true, min: 0 },
});

module.exports = model('Product',ProductSchema);