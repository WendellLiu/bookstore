const userModel = require('../../models/userModel');
const { userView, listUserView } = require('./view');
const { successResp } = require('../../shared/responseView');

const postUser = (req, res, next) => {
  userModel
    .createItem(req.body)
    .then(r => {
      res.send(successResp(userView(r)));
    })
    .catch(e => {
      console.log(e);
      next();
    });
};

const getUsers = (req, res, next) => {
  userModel
    .getItems()
    .then(r => {
      res.send(successResp(listUserView(r)));
    })
    .catch(e => {
      console.log(e);
      next();
    });
};

const deleteUser = (req, res, next) => {
  const { userId } = req.params;
  userModel
    .deleteItem(userId)
    .then(r => {
      res.send(successResp());
    })
    .catch(e => {
      console.log(e);
      next();
    });
};

module.exports = {
  postUser,
  getUsers,
  deleteUser,
};
