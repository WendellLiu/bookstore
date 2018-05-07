const Sequelize = require('sequelize');
const { compose } = require('ramda');

const database = require('../database');

const User = database.define('user', {
  name: Sequelize.STRING,
  gender: Sequelize.INTEGER,
  email: Sequelize.STRING,
});

const createUser = compose(User.create);

module.exports = {
  createItem: createUser,
};
