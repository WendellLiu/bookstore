const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const morgan = require('morgan');
const compression = require('compression');

const { PORT, MYSQL_PORT } = require('../config');
const errorHandler = require('./shared/middleware/errorHandler');

const router = require('./router');

const app = express();

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms'),
);
app.use(compression());
app.use(bodyParser.json());
app.use('/api', router);
app.use(errorHandler);

//加载主外键关系及创建数据库
require('./ref');

app.listen(PORT, () => {
  console.log(chalk.green(`app listening on port ${PORT}!`));
  console.log(chalk.green(`mysql listening on port ${MYSQL_PORT}!\n`));
});
