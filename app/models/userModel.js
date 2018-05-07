const Sequelize = require('sequelize');
const { compose } = require('ramda');

const database = require('../database');

const User = database.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const createUser = args => User.create(args);
const getUsers = () => User.findAll();

User.sync();

module.exports = {
  createItem: createUser,
  getItems: getUsers,
};
