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

bookRouter
  .route('/:book_id')
  .delete((req, res) => {
    bookModel.removeBook(req.params.book_id).then(r => res.json(r));
  })
  .put((req, res) => {
    bookModel.updateBook(req.params.book_id, req.body).then(r => res.json(r));
  });

module.exports = bookRouter;
