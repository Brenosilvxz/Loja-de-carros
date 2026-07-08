const carrosController = require("../Controllers/Carroscontrollers");
const express = require("express");
const router = express.Router();
const upload = require("../Config/multer");

router.get("/", carrosController.listarCarros);
router.get("/:id", carrosController.buscarCarro);
router.post("/", upload.single("imagem"), carrosController.adicionarCarro);
router.put("/:id", carrosController.editarCarro);
router.delete("/:id", carrosController.deletarCarro);

module.exports = router;
