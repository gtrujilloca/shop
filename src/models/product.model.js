const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
  name: { type: String, required: true, maxlength: 100, minlength: 3 },
  description: { type: String, required: true, maxlength: 300, minlength: 5 },
  imageUrl: {
    type: String,
    required: true,
    minlength: 10,
    match: [/^(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png)/, 'URL must start with http:// or https:// and must end with .jpg, .gif or .png'],
  },
  price: { type: Number, required: true, min: 0 },
  lastUpdated: { type: Date, required: true },
});

module.exports = model('Product',ProductSchema);

//^(http:\/\/|https:\/\/)+[a-zA-Z0-9\-\.]+|([\/|.|\w|\s])
//^(http(s?):)|([\/|.|\w|\s])*\.(?:jpg|gif|png)