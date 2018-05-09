const bookModel = require('../../models/bookModel');
const { successResp, errorResp } = require('../../shared/responseView');
const { getUserViewResp, getListUserViewResp } = require('./view');

const getBookListCb = (req, res, next) => {
  bookModel
    .getBookList()
    .then(r => res.send(successResp(getListUserViewResp(r))))
    .catch(e => next(e));
};

const postBookCb = (req, res, next) => {
  bookModel
    .createBook(req.body)
    .then(r => res.send(successResp(getUserViewResp(r))))
    .catch(e => next(e));
};

const removeBookCb = (req, res, next) => {
  const { book_id: bookId } = req.params;

  bookModel
    .removeBook(bookId)
    .then(r => res.send(successResp(getUserViewResp(r))))
    .catch(e => next(e));
};

const updateBookCb = (req, res, next) => {
  const { book_id: bookId } = req.params;

  bookModel
    .updateBook(bookId, req.body)
    .then(r => res.send(successResp(getUserViewResp(r))))
    .catch(e => next(e));
};

module.exports = {
  getBookListCb,
  postBookCb,
  removeBookCb,
  updateBookCb,
};
