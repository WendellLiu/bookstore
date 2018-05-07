const express = require('express');
const {
  postUser,
  getUsers,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router
  .post('/', postUser)
  .get('/', getUsers)
  .delete('/:userId', deleteUser);

module.exports = router;
