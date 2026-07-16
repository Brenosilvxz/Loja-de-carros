const db = require("../Db");
const bcrypt = require("bcrypt");

exports.cadastrar = (req, res) => {
  const { nome, email, senha } = req.body;

  db.query(
    "SELECT id FROM usuarios WHERE email = ?",
    [email],
    async (erro, resultado) => {
      if (erro) return res.sendStatus(500);

      if (resultado.length > 0)
        return res.status(400).json({
          mensagem: "Este e-mail já está cadastrado.",
        });

      try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        db.query(
          "INSERT INTO usuarios(nome,email,senha) VALUES(?,?,?)",
          [nome, email, senhaCriptografada],
          (erro) => {
            if (erro) return res.sendStatus(500);

            res.status(201).json({
              mensagem: "Usuário cadastrado com sucesso!",
            });
          },
        );
      } catch {
        return res.sendStatus(500);
      }
    },
  );
};

const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

exports.login = (req, res) => {
  const { email, senha } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    async (erro, resultado) => {
      if (erro) return res.sendStatus(500);

      if (resultado.length === 0)
        return res.status(401).json({
          mensagem: "Usuário não encontrado.",
        });

      const usuario = resultado[0];

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta)
        return res.status(401).json({
          mensagem: "Senha incorreta.",
        });

      const token = jwt.sign(
        {
          id: usuario.id,
          nome: usuario.nome,
        },
        SECRET,
        {
          expiresIn: "2h",
        },
      );

      res.json({
        token,
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        },
      });
    },
  );
};
