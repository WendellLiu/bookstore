const express = require('express');
const bookMethods = require('../models/bookModel');

const bookRouter = express.Router();

bookRouter.route('/').post((req, res) => {
  bookMethods.createBook(req.body);
  res.json(req.body);
});

module.exports = bookRouter;
