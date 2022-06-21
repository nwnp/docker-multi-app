const express = require("express");
const db = require("../models/db");
const router = express.Router();

router.get("/values", (req, res, next) => {
  db.pool.query("SELECT * FROM lists;", (err, results, fileds) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false, error: err });
    } else return res.json(results);
  });
});

router.post("/values", (req, res, next) => {
  db.pool.query(
    `INSERT INTO lists (values) VALUES("${req.body.value}")`,
    (err, results, fields) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true, value: req.body.value });
    }
  );
});

module.exports = router;
