const express = require("express");
const router = express.Router();

const favoritosController = require("../Controllers/Favoritocontrollers");
const auth = require("../Middlewares/Auth");

router.post("/", auth, favoritosController.adicionar);

router.get("/", auth, favoritosController.listar);

router.delete("/:id", auth, favoritosController.remover);

module.exports = router;
