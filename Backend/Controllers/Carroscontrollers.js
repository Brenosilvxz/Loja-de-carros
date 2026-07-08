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
  const imagem = req.file ? req.file.filename : null;

  console.log(dados);
  console.log(req.file);
  console.log("Imagem:", imagem);

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
      imagem,
    ],
    (erro, result) => {
      if (erro) {
        console.log(erro);
        return res.status(500).json({
          mensagem: "erro ao cadastrar o carro",
        });
      }
      return res.status(201).json({
        mensagem: "Carro cadastrado com sucesso!",
        id: result.insertId,
      });
    },
  );
}

function editarCarro(req, res) {
  const { id } = req.params;
  const dados = req.body;

  db.query(
    `UPDATE carros SET  
        nome = ?,
        marca = ?,
        modelo = ?,
        ano = ?,
        cor = ?,
        combustivel  = ?,
        cambio  = ?,
        quilometragem  = ?,
        potencia  = ?,
        preco  = ?,
        descricao  = ?,
        imagem  = ? 
        WHERE id = ?`,

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
      id,
    ],
    (erro, result) => {
      if (erro) {
        console.log(erro);
        return res.status(500).json({
          mensagem: "Erro ao editar carro",
        });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({
          mensagem: "Carro não encontrado",
        });
      }
      res.json({
        mensagem: "Carro atualizado com sucesso!",
      });
    },
  );
}

function deletarCarro(req, res) {
  const { id } = req.params;
  db.query(`DELETE FROM carros WHERE id = ?`, [id], (erro, result) => {
    if (erro) {
      console.log(erro);
      return res.status(500).json({
        mensagem: "Erro ao deletar carro",
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensagem: "Carro não encontrado",
      });
    }
    res.json({
      mensagem: "Carro deletado com sucesso!",
    });
  });
}

module.exports = {
  listarCarros,
  buscarCarro,
  adicionarCarro,
  editarCarro,
  deletarCarro,
};
