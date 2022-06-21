const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "mysql",
  database: "myapp",
  port: 3305,
});

exports.pool = pool;
