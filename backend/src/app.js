// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 8080;

const db = require("./db");

// const { sequelize } = require("./models/index");
// dotenv.config();

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("db connection success");
//   })
//   .catch((err) => {
//     console.error("db connection error", err);
//   });

// const apiRoutes = require("./routes/api");

app.use(express.json());
// app.use(cors("http://localhost:3000"));
// app.use("/api", apiRoutes);

app.get("/api/values", (req, res) => {
  db.pool.query("SELECT * FROM lists;", (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

app.post("/api/value", (req, res, next) => {
  db.pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err, results, fields) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true, value: req.body.value });
    }
  );
});

app.listen(PORT, () => {
  console.log("The server is on");
});
