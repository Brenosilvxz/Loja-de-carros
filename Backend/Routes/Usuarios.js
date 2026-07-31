const express = require("express");
const router = express.Router();

const usuariosController = require("../Controllers/Usuarioscontrollers");
const auth = require("../Middlewares/Auth");
// Cadastro
router.post("/", usuariosController.cadastrar);

// Login
router.post("/login", usuariosController.login);

// Perfil (rota protegida)
router.get("/perfil", auth, (req, res) => {
  res.json(req.usuario);
});

module.exports = router;
