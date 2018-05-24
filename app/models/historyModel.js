var Sequelize = require('sequelize');
var database = require('../database');

const History = database.define(
  'history',
  {
    booking_reason: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    user_uuid: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    book_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true },
);

History.sync();

const historyModel = {
  getHistoryList: () => History.findAll(),
  createHistory: ({ booking_reason, user_uuid, book_id }) =>
    History.create({ booking_reason, user_uuid, book_id }),
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
