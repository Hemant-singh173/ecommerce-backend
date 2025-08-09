const User = require('../models/user');

const userCtrl = {
    // Get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Get a single user by ID
    async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Create a new user
    async createUser(req, res) {
        try {
            const user = new User(req.body);
            const savedUser = await user.save();
            res.status(201).json(savedUser);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Update a user by ID
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedUser) return res.status(404).json({ error: 'User not found' });
            res.json(updatedUser);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Delete a user by ID
    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            if (!deletedUser) return res.status(404).json({ error: 'User not found' });
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = userCtrl;