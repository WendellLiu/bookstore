const express = require('express');
const {
  postUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router
  .post('/', postUser)
  .get('/', getUsers)
  .get('/:userId', getUser)
  .delete('/:userId', deleteUser)
  .patch('/:userId', updateUser);

module.exports = router;
