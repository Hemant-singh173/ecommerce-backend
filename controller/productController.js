const Product = require('../models/product');



// Product Controller
const productCtrl = {
    // Get all products
    async getAllProducts(req, res) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Get a single product by ID
    async getProductById(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) return res.status(404).json({ error: 'Product not found' });
            res.json(product);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Create a new product
    async createProduct(req, res) {
        try {
            const product = new Product(req.body);
            const savedProduct = await product.save();
            res.status(201).json(savedProduct);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Update a product by ID
    async updateProduct(req, res) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });
            res.json(updatedProduct);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Delete a product by ID
    async deleteProduct(req, res) {
        try {
            const deletedProduct = await Product.findByIdAndDelete(req.params.id);
            if (!deletedProduct) return res.status(404).json({ error: 'Product not found' });
            res.json({ message: 'Product deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = productCtrl;