const express = require("express");
const app = express();
const cors = require("cors");
const carrosRoutes = require("./Routes/Carros");

app.use(express.json());

app.use(cors());

app.use("/carros", carrosRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
