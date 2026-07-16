require("dotenv").config();

const express = require("express");
const cors = require("cors");

const carrosRoutes = require("./Routes/Carros");
const usuariosRoutes = require("./Routes/Usuarios");

const favoritosRoutes = require("./Routes/Favoritos");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/carros", carrosRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/favoritos", favoritosRoutes);

// Arquivos estáticos
app.use("/uploads", express.static("uploads"));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
