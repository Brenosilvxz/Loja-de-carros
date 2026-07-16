const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "meecars_secret_2026";

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      mensagem: "Token não informado.",
    });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const usuario = jwt.verify(token, SECRET);

    req.usuario = usuario;

    next();
  } catch (erro) {
    return res.status(401).json({
      mensagem: "Token inválido.",
    });
  }
}

module.exports = auth;
