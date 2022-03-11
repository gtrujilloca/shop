const Product = require('../models/product.model');
const ProductSrv = require('../services/product.service');

const getProducts = async (req,res) => {
  try {
    const { limit = 0 } = req.query;
    const products = await ProductSrv.getProducts(limit);
    return res.status(200).send({
      products
    })
  } catch(err) {
    console.error(err);
  }
}

const getProductById = async (req,res) => {
  try {
    const { id } = req.params;
    const product = await ProductSrv.getProductById(id);
    return res.status(200).send({
      product
    })
  } catch(err) {
    console.error(err);
  }
}

const createProduct = async (req,res) => {
  try {
    const {
      name,
      description,
      imageUrl,
      price,
    } = req.body;

    const newProduct = new Product({
      name,
      description,
      imageUrl,
      price
    })
    const quantity = await Product.find().count();
    if(quantity > 100)
      return res.status(200).send('You cannot create more than 100 records, if you want to create more, please delete some.')
    const response = await ProductSrv.createProduct(newProduct);
    return res.status(200).send({
      response
    })
  } catch(err) {
    console.error(err);
  }
}

const updateProduct = async (req,res) => {
  try {
    const { id } = req.params;
    const product = await ProductSrv.updateProduct(id, req.body);
    return res.status(200).send({
      product
    })
  } catch(err) {
    console.error(err);
  }
}

const removeProduct = async (req,res) => {
  try {
    const { id } = req.params;
    const quantity = await Product.find().count();
    if(quantity <= 5)
      return res.status(200).send('The registration minimum is five, you cannot delete more products.')

    await ProductSrv.removeProduct(id);
    return res.status(200).send('Product deleted');
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
