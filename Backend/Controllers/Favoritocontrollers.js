const db = require("../Db");

exports.adicionar = (req, res) => {
  const usuario_id = req.usuario.id;
  const { carro_id } = req.body;

  db.query(
    "INSERT INTO favoritos (usuario_id, carro_id) VALUES (?, ?)",
    [usuario_id, carro_id],
    (erro) => {
      if (erro) {
        return res.status(500).json({
          mensagem: "Erro ao favoritar.",
        });
      }

      res.status(201).json({
        mensagem: "Carro favoritado com sucesso!",
      });
    },
  );
};

exports.listar = (req, res) => {
  const usuario_id = req.usuario.id;

  db.query(
    `SELECT carros.*
         FROM favoritos
         INNER JOIN carros
         ON favoritos.carro_id = carros.id
         WHERE favoritos.usuario_id = ?`,
    [usuario_id],
    (erro, resultado) => {
      if (erro) return res.sendStatus(500);

      res.json(resultado);
    },
  );
};

exports.remover = (req, res) => {
  const usuario_id = req.usuario.id;
  const carro_id = req.params.id;

  db.query(
    "DELETE FROM favoritos WHERE usuario_id = ? AND carro_id = ?",
    [usuario_id, carro_id],
    (erro) => {
      if (erro) return res.sendStatus(500);

      res.json({
        mensagem: "Favorito removido.",
      });
    },
  );
};
