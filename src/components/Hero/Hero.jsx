import {
  FaBath,
  FaUserMd,
  FaHandshake,
  FaFutbol,
  FaShuttleVan,
  FaHome,
  FaPaw,
} from "react-icons/fa";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Cuidado, carinho e saúde para quem faz parte da <span>família</span>
          <FaPaw className="hero-title-icon" />
        </h1>

        <p>
          Seu pet merece um ambiente seguro, completo e acolhedor, preparado
          para oferecer momentos de felicidade todos os dias.
        </p>

        <div className="hero-benefits">
          <span>
            <FaBath /> Banho e Tosa
          </span>
          <span>
            <FaUserMd /> Veterinários Especializados
          </span>
          <span>
            <FaHandshake /> Atendimento Humanizado
          </span>
          <span>
            <FaFutbol /> Recreação
          </span>
          <span>
            <FaShuttleVan /> Táxi Pet
          </span>
          <span>
            <FaHome /> Hospedagem Pet
          </span>
        </div>

        <div className="hero-buttons">
          <Link to="/contato" className="btn-primary">
            Agendar Atendimento
          </Link>

          <Link to="/servicos" className="btn-secondary">
            Conhecer Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
