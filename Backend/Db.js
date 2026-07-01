const mysql2 = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "140724",
  database: "loja_de_carros",
});
connection.connect((erro) => {
  if (erro) {
    console.log(erro);
    return;
  }

  console.log("Sucesso!");
});

module.exports = connection;
