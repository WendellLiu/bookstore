const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.postUser).get('/', userController.getUsers);

module.exports = router;
