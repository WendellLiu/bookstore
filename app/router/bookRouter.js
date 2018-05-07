const express = require('express');
const bookModel = require('../models/bookModel');

const bookRouter = express.Router();

bookRouter
  .route('/')
  .get((req, res) => bookModel.getBookList().then(r => res.json(r)))
  .post((req, res) => {
    bookModel.createBook(req.body);
    res.json(req.body);
  });

module.exports = bookRouter;
