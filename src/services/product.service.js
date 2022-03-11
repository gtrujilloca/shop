const Product = require('../models/product.model');

const getProducts = async (limit) => {
  try {
    if(limit === 0) return await Product.find();
    return await Product.find().limit(limit);
  } catch(err) {
    console.error(err);
  }
}

const getProductById = async (id) => {
  try {
    return await Product.findById(id);
  } catch(err) {
    console.error(err);
  }
}

const createProduct = async (product) => {
  try {
    return await product.save();
  } catch(err) {
    console.error(err);
  }
}

const updateProduct = async (id, product) => {
  try {
    return await Product.findByIdAndUpdate(id, product);
  } catch(err) {
    console.error(err);
  }
}

const removeProduct = async (id) => {
  try {
    return await Product.findByIdAndDelete(id);
  } catch(err) {
    console.error(err);
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  removeProduct,
}