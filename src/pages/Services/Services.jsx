import ServiceCard from "../../components/ServiceCard/ServiceCard";

import {
  FaBath,
  FaUserMd,
  FaHome,
  FaShuttleVan,
  FaFutbol,
  FaSyringe,
} from "react-icons/fa";

import pet3 from "../../assets/pet3.png";
import "./Services.css";

function Services() {
  const whatsapp = "https://wa.me/5554999999999";
  return (
    <main className="services">
      <section className="services-hero">
        <img src={pet3} alt="Pets felizes na PetCare" />

        <div className="services-overlay">
          <h1>Nossos Serviços</h1>

          <p>
            Tudo o que seu pet precisa para viver com saúde, conforto e
            felicidade.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <h2>Cuidado completo para o seu Pet</h2>

          <p>
            Escolha o serviço ideal para garantir o bem-estar do seu melhor amigo. Nossa equipe está pronta para oferecer atendimento de qualidade, carinho e atenção em cada momento do cuidado com seu pet. Agende um atendimento e descubra por que tantos tutores confiam na PetCare para cuidar da saúde, conforto e felicidade dos seus pets.
          </p>

          <div className="services-grid">
            <ServiceCard
              icon={<FaBath />}
              title="Banho e Tosa"
              description="Higiene, beleza e conforto para manter seu pet sempre limpo, saudável e feliz."
              buttonText="Agendar"
              link={`${whatsapp}?text=Olá! Gostaria de agendar um banho e tosa para meu pet.`}
            />

            <ServiceCard
              icon={<FaUserMd />}
              title="Atendimento Veterinário"
              description="Consultas, avaliações e acompanhamento profissional para a saúde do seu pet."
              buttonText="Agendar"
              link={`${whatsapp}?text=Olá! Gostaria de agendar uma consulta veterinária.`}
            />

            <ServiceCard
              icon={<FaHome />}
              title="Hospedagem Pet"
              description="Um ambiente seguro e acolhedor para seu companheiro enquanto você estiver fora."
              buttonText="Conhecer Hotel"
              link="/hotel"
            />

            <ServiceCard
              icon={<FaShuttleVan />}
              title="Táxi Pet"
              description="Transporte seguro e confortável para consultas, banhos e outros compromissos."
              buttonText="Agendar"
              link={`${whatsapp}?text=Olá! Gostaria de contratar o serviço de Táxi Pet.`}
            />

            <ServiceCard
              icon={<FaFutbol />}
              title="Recreação"
              description="Momentos de diversão e socialização que contribuem para o bem-estar físico e emocional."
              buttonText="Agendar"
              link={`${whatsapp}?text=Olá! Gostaria de saber mais sobre as atividades de recreação.`}
            />

            <ServiceCard
              icon={<FaSyringe />}
              title="Vacinação"
              description="Proteção e prevenção através de vacinas essenciais para cada fase da vida."
              buttonText="Agendar"
              link={`${whatsapp}?text=Olá! Gostaria de agendar uma vacinação para meu pet.`}
            />
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="container">
          <h2>Como funciona?</h2>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>

              <h3>Escolha o Serviço</h3>

              <p>
                Explore nossos serviços e encontre a melhor opção para seu pet.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">2</div>

              <h3>Fale com a Equipe</h3>

              <p>Entre em contato pelo WhatsApp para tirar dúvidas.</p>
            </div>

            <div className="process-card">
              <div className="process-number">3</div>

              <h3>Agende o Horário</h3>

              <p>Escolha o melhor dia e horário para o atendimento.</p>
            </div>

            <div className="process-card">
              <div className="process-number">4</div>

              <h3>Traga seu Pet</h3>

              <p>Nossa equipe estará pronta para recebê-lo com todo cuidado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <h2>Pronto para cuidar do seu melhor amigo?</h2>

        <p>
          Agende um atendimento e descubra por que tantos tutores confiam na
          PetCare para cuidar da saúde, conforto e felicidade dos seus pets.
        </p>

        <a
          href="https://wa.me/5554999999999?text=Olá! Gostaria de agendar um atendimento para meu pet."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Agendar Atendimento</button>
        </a>
      </section>
    </main>
  );
}

export default Services;
