const historyModel = require('../../models/historyModel');
const { successResp, errorResp } = require('../../shared/responseView');
const { getUserViewResp, getListUserViewResp } = require('./view');

const getHistoryListCb = (req, res, next) => {
  historyModel
    .getHistoryList()
    .then(r => res.send(successResp(getListUserViewResp(r))))
    .catch(e => next(e));
};

const postHistoryCb = (req, res, next) => {
  historyModel
    .createHistory(req.body)
    .then(r => res.send(successResp(getUserViewResp(r))))
    .catch(e => next(e));
};

const removeHistoryCb = (req, res, next) => {
  const { history_id: historyId } = req.params;

  historyModel
    .removeHistory(historyId)
    .then(r => res.send(successResp(getUserViewResp(r))))
    .catch(e => next(e));
};

const updateHistoryCb = (req, res, next) => {
  const { history_id: historyId } = req.params;

  historyModel
    .updateHistory(historyId, req.body)
    .then(r => res.send(successResp(getUserViewResp(r))))
    .catch(e => next(e));
};

module.exports = {
  getHistoryListCb,
  postHistoryCb,
  removeHistoryCb,
  updateHistoryCb,
};
