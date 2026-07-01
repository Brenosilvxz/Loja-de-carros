const express = require("express");
const router = express.Router();

const CarrosController = require("../controllers/CarrosController");

router.get("/", CarrosController.listarCarros);
router.get("/:id", CarrosController.buscarCarro);

module.exports = router;
