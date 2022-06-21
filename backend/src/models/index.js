const Sequelize = require("sequelize");

// database model
const List = require("./lists");

// dotenv file
const dotenv = require("dotenv");
dotenv.config();

// db setting
const db = {
  username: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
};
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
});

db.sequelize = sequelize;
db.List = List;
List.init(sequelize);
List.associate(db);

module.exports = db;
