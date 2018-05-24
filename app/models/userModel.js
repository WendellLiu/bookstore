const Sequelize = require('sequelize');
const { compose } = require('ramda');

const database = require('../database');

const User = database.define(
  'user',
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      allowNull: false,
      unique: true,
    },
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
  },
  { underscored: true },
);

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
  User,
};
