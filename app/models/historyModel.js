var Sequelize = require('sequelize');
var database = require('../database');

const History = database.define('history', {
  bookingReason: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bookId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

History.sync();

const historyModel = {
  getHistoryList: () => History.findAll(),
  createHistory: ({ bookingReason, userId, bookId }) =>
    History.create({ bookingReason, userId, bookId }),
  removeHistory: id =>
    History.destroy({
      where: {
        id,
      },
    }),
  updateHistory: (id, updatedObj) =>
    History.update(updatedObj, {
      where: {
        id,
      },
    }),
};

module.exports = {
  ...historyModel,
  History,
};
