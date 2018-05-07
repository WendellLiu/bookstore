var Sequelize = require('sequelize');
var database = require('../database');

const Book = database.define('book', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  // publish_date: Sequelize.DATE,
});

const book = Book.sync();

const bookMethods = {
  createBook: bookConfig => book.then(() => Book.create(bookConfig)),
  findAllBooks: () => Book.findAll(),
};

module.exports = bookMethods;
