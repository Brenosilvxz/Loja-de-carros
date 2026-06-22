import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MEECARS</h2>
          <p>
            Encontre o carro ideal com qualidade, confiança e os melhores preços
            do mercado.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-links">
            <h3>Navegação</h3>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Início
            </Link>
            <Link
              to="Catalogo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Modelos
            </Link>
            <Link
              to="Sobre"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Sobre
            </Link>
            <Link
              to="Contato"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contato
            </Link>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>

          <p>📍 São Paulo - Brasil</p>
          <p>📞 (11) 99999-9999</p>
          <p>✉ contato@meecars.com</p>
        </div>
      </div>
      <div className="footer-benefits">
        <div className="benefit-card">
          <span>🛡️</span>
          <h3>Compra Segura</h3>
          <p>
            Todos os veículos passam por inspeção completa e possuem
            documentação verificada.
          </p>
        </div>

        <div className="benefit-card">
          <span>🌍</span>
          <h3>Vendas Internacionais</h3>
          <p>
            Exportamos veículos para diversos países com todo o suporte
            necessário.
          </p>
        </div>

        <div className="benefit-card">
          <span>💳</span>
          <h3>Financiamento Fácil</h3>
          <p>
            Simule parcelas e encontre as melhores condições com nossos
            parceiros.
          </p>
        </div>

        <div className="benefit-card">
          <span>🚗</span>
          <h3>Garantia de Qualidade</h3>
          <p>
            Veículos revisados, certificados e prontos para proporcionar a
            melhor experiência.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 MEECARS. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
