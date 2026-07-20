const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.getConnection((erro, conexao) => {
  if (erro) {
    console.log("Erro no banco:", erro);
    return;
  }

  console.log("Banco conectado!");
  conexao.release();
});

module.exports = connection;
