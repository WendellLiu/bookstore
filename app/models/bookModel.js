var Sequelize = require('sequelize');
var database = require('../database');

const Book = database.define(
  'book',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // YYYY-MM-DD
    publish_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { underscored: true },
);

Book.sync();

const bookModel = {
  getBookList: () => Book.findAll(),
  createBook: bookArgs => Book.create(bookArgs),
  removeBook: id =>
    Book.destroy({
      where: {
        id,
      },
    }),
  updateBook: (id, updatedObj) =>
    Book.update(updatedObj, {
      where: {
        id,
      },
    }),
};

module.exports = {
  ...bookModel,
  Book,
};
