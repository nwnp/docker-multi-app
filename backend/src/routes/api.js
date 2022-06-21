const express = require("express");
const router = express.Router();
const List = require("../models/lists");

router.post("/values", async (req, res, next) => {
  try {
    const value = await List.create({ value: req.body.value });
    return res
      .status(200)
      .json({ success: true, value: value.dataValues.value });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
});

router.get("/value", async (req, res, next) => {
  try {
    const lists = await List.findAll({});
    return res.status(200).json({ success: true, lists });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

module.exports = router;
