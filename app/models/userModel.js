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
const getUser = id => User.findById(id);
const deleteUser = id =>
  User.destroy({
    where: { id },
  });

const updateUser = id => value =>
  User.update(value, {
    where: {
      id,
    },
  });

User.sync();

module.exports = {
  createItem: createUser,
  getItems: getUsers,
  getItem: getUser,
  deleteItem: deleteUser,
  updateItem: updateUser,
};
