const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const morgan = require('morgan');

const { PORT, MYSQL_PORT } = require('../config');

const router = require('./router');

const app = express();

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms'),
);
app.use(bodyParser.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(chalk.green(`app listening on port ${PORT}!`));
  console.log(chalk.green(`mysql listening on port ${MYSQL_PORT}!\n`));
});
