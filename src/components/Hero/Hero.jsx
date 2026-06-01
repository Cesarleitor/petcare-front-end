import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Cuidado, carinho e saúde para quem faz parte da <span>família</span>🐾
        </h1>

        <p>
          Seu pet merece um ambiente seguro, completo e acolhedor, preparado
          para oferecer momentos de felicidade todos os dias.
        </p>

        <div className="hero-benefits">
          <span>🛁 Banho e Tosa</span>
          <span>👨‍⚕️ Veterinários Especializados</span>
          <span>🤝 Atendimento Humanizado</span>
          <span>🎾 Recreação</span>
          <span>🚕 Táxi Pet</span>
          <span>🏨 Hospedagem Pet</span>
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
