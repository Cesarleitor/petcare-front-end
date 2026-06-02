import historyImage from "../../assets/pet4.png";
import pet1 from "../../assets/pet1.jpg";
import pet2 from "../../assets/pet2.png";
import pet3 from "../../assets/pet3.png";
import { FaBullseye } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./Sobre.css";

function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <img src={pet3} alt="Sobre a PetCare" />

        <div className="about-overlay">
          <h1>Sobre a PetCare</h1>

          <p>
            Mais do que um pet shop, somos apaixonados por cuidar de quem faz
            parte da sua família.
          </p>
        </div>
      </section>

      <section className="about-history">
        <div className="history-image">
          <img src={historyImage} alt="Equipe PetCare cuidando dos pets" />
        </div>

        <div className="history-content">
          <h2>Nossa História</h2>

          <p>
            A PetCare nasceu com o objetivo de oferecer os melhores cuidados
            para os animais de estimação. Ao longo dos anos, crescemos e
            evoluímos, sempre com o compromisso de proporcionar um ambiente
            seguro e acolhedor para os pets e seus tutores.
          </p>

          <p>
            Nossa equipe trabalha diariamente para proporcionar experiências
            positivas, sempre colocando o bem-estar animal em primeiro lugar.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <h2>Nossos Números</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>5.000+</h3>
            <p>Pets Atendidos</p>
          </div>

          <div className="stat-card">
            <h3>98%</h3>
            <p>Satisfação dos Clientes</p>
          </div>

          <div className="stat-card">
            <h3>15+</h3>
            <p>Profissionais Capacitados</p>
          </div>

          <div className="stat-card">
            <h3>24h</h3>
            <p>Cuidado e Atenção</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="value-card">
          <FaBullseye className="value-icon" />
          <h3>Missão</h3>
          <p>
            Promover o bem-estar animal através de serviços de qualidade e
            atendimento especializado.
          </p>
        </div>

        <div className="value-card">
          <FaEye className="value-icon" />
          <h3>Visão</h3>
          <p>
            Ser referência em cuidados pet, oferecendo excelência em cada
            atendimento.
          </p>
        </div>

        <div className="value-card">
          <FaHeart className="value-icon" />
          <h3>Valores</h3>
          <p>Respeito, responsabilidade, ética e amor pelos animais.</p>
        </div>
      </section>

      <section className="about-benefits">
        <h2>Por que escolher a PetCare?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🐾 Atendimento Humanizado</h3>
            <p>Cada pet recebe atenção individual e cuidados personalizados.</p>
          </div>

          <div className="benefit-card">
            <h3>🩺 Equipe Especializada</h3>
            <p>Profissionais preparados para oferecer o melhor atendimento.</p>
          </div>

          <div className="benefit-card">
            <h3>🏡 Ambiente Seguro</h3>
            <p>Estrutura planejada para o conforto e bem-estar dos animais.</p>
          </div>

          <div className="benefit-card">
            <h3>❤️ Amor pelos Pets</h3>
            <p>Tratamos cada animal como parte da nossa própria família.</p>
          </div>
        </div>
      </section>

      <section className="about-gallery">
        <h2>Momentos Especiais na PetCare</h2>

        <div className="gallery-grid">
          <img src={pet1} alt="Pet feliz" />
          <img src={historyImage} alt="Equipe PetCare" />
          <img src={pet2} alt="Cuidado com pets" />
        </div>
      </section>

      <section className="about-cta">
        <h2>Pronto para conhecer nossos serviços?</h2>

        <p>
          Descubra tudo o que a PetCare pode oferecer para a saúde e felicidade
          do seu melhor amigo.
        </p>

        <button>Ver Serviços</button>
      </section>
    </main>
  );
}

export default About;
