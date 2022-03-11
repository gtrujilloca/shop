const Product = require('../models/product.model');

const getProducts = async (limit) => {
  try {
    if(limit === 0) return await Product.find();
    return await Product.find().limit(limit);
  } catch(err) {
    return err.message;
  }
}

const getProductById = async (id) => {
  try {
    return await Product.findById(id);
  } catch(err) {
    return err.message;
  }
}

const createProduct = async (product) => {
  try {
    return await product.save();
  } catch(err) {
    return err.message;
  }
}

const updateProduct = async (id, product) => {
  try {
    return await Product.findByIdAndUpdate(id, product);
  } catch(err) {
    return err.message;
  }
}

const removeProduct = async (id) => {
  try {
    return await Product.findByIdAndRemove(id);
  } catch(err) {
    return err.message;
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  removeProduct,
}