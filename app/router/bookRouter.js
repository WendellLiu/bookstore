const express = require('express');
const bookModel = require('../models/bookModel');
const {
  getBookListCb,
  postBookCb,
  removeBookCb,
  updateBookCb,
} = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter
  .route('/')
  .get(getBookListCb)
  .post(postBookCb);

bookRouter
  .route('/:book_id')
  .delete(removeBookCb)
  .put(updateBookCb);

module.exports = bookRouter;
