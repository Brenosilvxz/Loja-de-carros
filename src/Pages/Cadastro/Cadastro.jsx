import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cadastro.css";
import logo from "../../assets/logo.png";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  async function cadastrar(e) {
    e.preventDefault();

    setErro("");

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos.");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve possuir pelo menos 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      const resposta = await axios.post("http://localhost:3000/usuarios", {
        nome,
        email,
        senha,
      });

      alert(resposta.data.mensagem);

      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      // Redireciona para o login
      navigate("/login");
    } catch (err) {
      if (err.response) {
        setErro(err.response.data.mensagem);
      } else {
        setErro("Erro ao conectar com o servidor.");
      }
    }
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <img src={logo} alt="MeeCars" className="cadastro-logo" />

        <h1>Criar Conta</h1>
        <p>Cadastre-se para acessar a MeeCars.</p>

        <form onSubmit={cadastrar}>
          <div className="input-group">
            <label>Nome Completo</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

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

          <div className="input-group">
            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          {erro && <p className="erro">{erro}</p>}

          <button type="submit">Cadastrar</button>
        </form>

        <span>
          Já possui uma conta? <Link to="/login">Entrar</Link>
        </span>
      </div>
    </div>
  );
}

export default Cadastro;
