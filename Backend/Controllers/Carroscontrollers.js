const db = require("../Db");

// listar todos
function listarCarros(req, res) {
  db.query("SELECT * FROM carros", (erro, results) => {
    if (erro) {
      console.log(erro);
      return res.status(500).json({
        mensagem: "Erro ao buscar os carros",
      });
    }
    res.json(results);
  });
}

// buscar por id
function buscarCarro(req, res) {
  const { id } = req.params;

  db.query("SELECT * FROM carros WHERE id = ?", [id], (erro, result) => {
    if (erro) {
      console.log(erro);
      return res.status(500).json({
        mensagem: "Erro ao encontrar o carro",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        mensagem: "Nenhum carro foi encontrado",
      });
    }

    res.json(result[0]);
  });
}

// adicionar carro
function adicionarCarro(req, res) {
  const dados = req.body;

  db.query(
    `INSERT INTO carros (
        nome,
        marca,
        modelo,
        ano,
        cor,
        combustivel,
        cambio,
        quilometragem,
        potencia,
        preco,
        descricao,
        imagem
) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      dados.nome,
      dados.marca,
      dados.modelo,
      dados.ano,
      dados.cor,
      dados.combustivel,
      dados.cambio,
      dados.quilometragem,
      dados.potencia,
      dados.preco,
      dados.descricao,
      dados.imagem,
    ],
    (erro, result) => {
      if (erro) {
        return res.status(500).json({
          mensagem: "erro ao cadastrar o carro",
        });
      }

      res.json(result);
    },
  );
}

module.exports = {
  listarCarros,
  buscarCarro,
  adicionarCarro,
};
