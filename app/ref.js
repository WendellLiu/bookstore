/**
 * 模型关联类
 */
const database = require('./database');
const { Book } = require('./models/bookModel');
const { History } = require('./models/historyModel');
const { User } = require('./models/userModel');

// 建立模型之间关联关系
// 在 History 中建立 `user_uuid` 為 foreign key，並指定 reference 的對象為 User 中的 uuid 欄位（預設為 User 的 primary key: id）
// 其中，User 的 uuid 必須為 unique，否則若 User 中有多筆資料的 uuid 相同，則 History 的 user_uuid 就不知道要 reference 誰了）
History.belongsTo(User, { foreignKey: 'user_uuid', targetKey: 'uuid' });
History.belongsTo(Book);

// 创建表
// database.sync({ force: false });
