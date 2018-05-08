var Sequelize = require('sequelize');
var database = require('../database');

const Book = database.define('book', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  // publish_date: Sequelize.DATE,
});

const book = Book.sync();

const bookModel = {
  getBookList: () => Book.findAll(),
  createBook: bookConfig => book.then(() => Book.create(bookConfig)),
  removeBook: id =>
    Book.destroy({
      where: {
        id,
      },
    }),
};

module.exports = bookModel;
