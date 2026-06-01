import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>
            <span>🐾</span>
            <span>PetCare</span>
          </h3>
          <p>
            Cuidando do seu melhor amigo com carinho, segurança e dedicação.
          </p>
        </div>

        <div>
          <h4>Contato</h4>
          <p>(54) 99999-9999</p>
          <p>contato@petcare.com</p>
        </div>

        <div>
          <h4>Horários</h4>
          <p>Seg - Sex: 08h às 18h</p>
          <p>Sábado: 08h às 12h</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 PetCare - Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
