import { PawPrint, Phone, Mail, Clock3 } from "lucide-react";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>
            <PawPrint size={28} />
            PetCare
          </h2>

          <p>Cuidado, carinho e saúde para quem faz parte da família.</p>

          <div className="footer-social">
            <a href="#">
              <FaInstagram size={20} />
            </a>

            <a href="#">
              <FaFacebook size={20} />
            </a>

            <a href="#">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h4>Serviços</h4>

          <p>🛁 Banho e Tosa</p>
          <p>🩺 Veterinário</p>
          <p>🏨 Hospedagem</p>
          <p>🚕 Táxi Pet</p>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>

          <p>
            <Phone size={16} />
            (54) 99999-9999
          </p>

          <p>
            <Mail size={16} />
            contato@petcare.com
          </p>
        </div>

        <div className="footer-section">
          <h4>Horários</h4>

          <p>
            <Clock3 size={16} />
            Seg - Sex: 08h às 18h
          </p>

          <p>
            <Clock3 size={16} />
            Sábado: 08h às 12h
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 PetCare • Desenvolvido por
        <span className="footer-credit"> Cesar NexuCode</span>
      </div>
    </footer>
  );
}

export default Footer;
