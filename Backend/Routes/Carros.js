const carrosController = require("../Controllers/Carroscontrollers");
const express = require("express");
const router = express.Router();

router.get("/", carrosController.listarCarros);
router.get("/:id", carrosController.buscarCarro);
router.post("/", carrosController.adicionarCarro);
router.put("/:id", carrosController.editarCarro);
router.delete("/:id", carrosController.deletarCarro);

module.exports = router;
