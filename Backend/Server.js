const express = require("express");
const app = express();

const carrosRoutes = require("./routes/CarrosRoutes");

app.use(express.json());

app.use("/carros", carrosRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
