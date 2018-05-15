/**
 * 模型关联类
 */
const database = require('./database');
const { Book } = require('./models/bookModel');
const { History } = require('./models/historyModel');
const { User } = require('./models/userModel');

// 建立模型之间关联关系
History.belongsTo(User);
History.belongsTo(Book);

// 创建表
// database.sync({ force: false });
