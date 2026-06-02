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
          <button>Agendar Atendimento</button>
          <button>Conhecer Serviços</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
