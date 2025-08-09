const express = require('express');
const productCtrl  = require('../controller/productController');

const router = express.Router();

// Example: Get all products
router.get('/', productCtrl.getAllProducts);

// Example: Get a single product by ID
router.get('/:id', productCtrl.getProductById);

// Example: Create a new product
router.post('/', productCtrl.createProduct);

// Example: Update a product by ID
router.put('/:id', productCtrl.updateProduct);

// Example: Delete a product by ID
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;