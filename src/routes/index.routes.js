const { Router } = require('express');
const productCtr = require('../controllers/product.controller');

const router = Router();


router.get('/products/', productCtr.getProducts);
router.get('/products/:id', productCtr.getProductById);
router.post('/products', productCtr.createProduct);
router.put('/products/:id', productCtr.updateProduct);
router.delete('/products/:id', productCtr.removeProduct);

module.exports = router;