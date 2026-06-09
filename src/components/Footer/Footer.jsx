import { PawPrint, Phone, Mail, Clock3 } from "lucide-react";
import { FaBath, FaUserMd, FaHotel, FaShuttleVan } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <a href="#" aria-label="Instagram da PetCare">
              <FaInstagram size={20} />
            </a>

            <a href="#" aria-label="Facebook da PetCare">
              <FaFacebook size={20} />
            </a>

            <a href="#" aria-label="WhatsApp da PetCare">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h4>Serviços</h4>

          <p>
            <FaBath size={14} />
            Banho e Tosa
          </p>

          <p>
            <FaUserMd size={14} />
            Veterinário
          </p>

          <p>
            <FaHotel size={14} />
            Hotel Pet
          </p>

          <p>
            <FaShuttleVan size={14} />
            Táxi Pet
          </p>
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

          <a
            href="https://wa.me/5554999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
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

        <div className="footer-section footer-links">
          <h4>Links Rápidos</h4>

          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/hotel">Hotel Pet</Link>
          <Link to="/adocao">Adoção</Link>
          <Link to="/contato">Contato</Link>
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
