import "./Localize.css";

function Localize() {
  return (
    <section className="localize-page">
      <div className="localize-container">
        <h1>Encontre Nossa Loja</h1>
        <p>
          Venha conhecer nosso showroom e conferir os melhores veículos de luxo.
        </p>

        <div className="localize-content">
          <div className="localize-info">
            <div className="info-card">
              <h3>📍 Endereço</h3>
              <p>Av. Exemplo, 123 - Cotia/SP</p>
            </div>

            <div className="info-card">
              <h3>📞 Telefone</h3>
              <p>(11) 99999-9999</p>
            </div>

            <div className="info-card">
              <h3>📧 E-mail</h3>
              <p>contato@meecars.com</p>
            </div>

            <div className="info-card">
              <h3>🕒 Horário</h3>
              <p>Segunda a Sábado - 09:00 às 18:00</p>
            </div>

            <div className="link-rota">
              <a
                className="rota-btn"
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
              >
                Traçar Rota
              </a>
            </div>
          </div>

          <div className="localize-map">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps?q=Cotia,SP&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Localize;
