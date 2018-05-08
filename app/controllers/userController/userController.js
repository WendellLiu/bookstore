const userModel = require('../../models/userModel');
const { userView, listUserView } = require('./view');
const { successResp } = require('../../shared/responseView');

const postUser = (req, res, next) =>
  userModel
    .createItem(req.body)
    .then(r => {
      res.send(successResp(userView(r)));
    })
    .catch(e => {
      console.log(e);
      next(e);
    });

const getUsers = (req, res, next) =>
  userModel
    .getItems()
    .then(r => {
      res.send(successResp(listUserView(r)));
    })
    .catch(e => {
      console.log(e);
      next(e);
    });

const deleteUser = (req, res, next) => {
  const { userId } = req.params;
  return userModel
    .deleteItem(userId)
    .then(r => {
      res.send(successResp());
    })
    .catch(e => {
      console.log(e);
      next(e);
    });
};

module.exports = {
  postUser,
  getUsers,
  deleteUser,
};
