const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Projeto backend");
});

app.get('/carros', (req, res) => {
    res.send('Voçê está no catalógo de carros')
});

app.listen(3000, () => {
  console.log("Servidor rodando...");
});
