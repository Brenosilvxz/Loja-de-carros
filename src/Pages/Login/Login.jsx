import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";
import logo from "../../assets/logo.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function validarLogin(e) {
    e.preventDefault();

    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      const resposta = await axios.post(
        "http://localhost:3000/usuarios/login",
        {
          email,
          senha,
        },
      );

      localStorage.setItem("token", resposta.data.token);

      localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));

      navigate("/");
    } catch (err) {
      if (err.response) {
        setErro(err.response.data.mensagem);
      } else {
        setErro("Erro ao conectar com o servidor.");
      }
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="MeeCars" className="login-logo" />

        <h1>Bem-vindo</h1>
        <p>Entre na sua conta</p>

        <form onSubmit={validarLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {erro && <p className="erro">{erro}</p>}

          <button type="submit">Entrar</button>
        </form>

        <span>
          Não possui conta? <Link to="/cadastro">Criar conta</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
