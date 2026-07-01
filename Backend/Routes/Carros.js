const express = require("express");

const router = express.Router();

const carros = require("../Data/Carros");

router.get("/", (req, res) => {
  res.json(carros);
});

module.exports = router;
