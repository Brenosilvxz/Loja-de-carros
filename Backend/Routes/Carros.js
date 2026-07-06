const carrosController = require("../Controllers/Carroscontrollers");
const express = require("express");
const router = express.Router();

router.get("/", carrosController.listarCarros);
router.get("/:id", carrosController.buscarCarro);
router.post("/", carrosController.adicionarCarro);

module.exports = router;
