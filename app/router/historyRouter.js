const express = require('express');
const historyModel = require('../models/historyModel');
const {
  getHistoryListCb,
  postHistoryCb,
  removeHistoryCb,
  updateHistoryCb,
} = require('../controllers/historyController');

const historyRouter = express.Router();

historyRouter
  .route('/')
  .get(getHistoryListCb)
  .post(postHistoryCb);

historyRouter
  .route('/:history_id')
  .delete(removeHistoryCb)
  .put(updateHistoryCb);

module.exports = historyRouter;
