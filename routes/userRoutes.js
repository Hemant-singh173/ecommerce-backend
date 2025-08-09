const express = require('express');
const userCtrl = require('../controller/userController');
const router = express.Router();

router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getUserById);
router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;
