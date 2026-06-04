import "./Adoption.css";

import {
  FaHeart,
  FaHome,
  FaSearch,
  FaFileAlt,
  FaPhoneAlt,
  FaPaw,
  FaHandshake,
  FaShieldAlt,
  FaSyringe,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";

function Adoption() {
  return (
    <main className="adoption">
      {/* HERO */}
      <section className="adoption-hero">
        <div className="adoption-hero-content">
          <h1>
            Encontre um novo melhor <span> AMIGO</span>
            <FaPaw className="hero-title-icon" />
          </h1>

          <p>
            Adotar é transformar vidas. Conheça pets incríveis que estão
            esperando por um lar cheio de amor, cuidado e carinho.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="adoption-process">
        <h2>Como Funciona a Adoção</h2>

        <div className="adoption-process-grid">
          <div className="adoption-process-card">
            <FaSearch className="adoption-process-icon" />

            <h3>Escolha um Pet</h3>

            <p>
              Navegue pelos pets disponíveis e encontre aquele que combina com
              você e sua família.
            </p>
          </div>

          <div className="adoption-process-card">
            <FaFileAlt className="adoption-process-icon" />

            <h3>Envie sua Proposta</h3>

            <p>
              Preencha o formulário de adoção para que possamos conhecer você
              melhor.
            </p>
          </div>

          <div className="adoption-process-card">
            <FaPhoneAlt className="adoption-process-icon" />

            <h3>Aguarde o Contato</h3>

            <p>Nossa equipe analisará as informações e entrará em contato.</p>
          </div>

          <div className="adoption-process-card">
            <FaClipboardCheck className="adoption-process-icon" />

            <h3>Processo Seguro</h3>

            <p>
              Nossa equipe acompanha todas as etapas para garantir uma adoção
              responsável e o bem-estar do animal.
            </p>
          </div>
        </div>
      </section>
      {/* PETS */}
      <section className="adoption-pets">
        <h2>Pets Disponíveis</h2>

        <p className="adoption-pets-subtitle">
          Em breve você poderá visualizar todos os pets cadastrados diretamente
          pelo painel administrativo.
        </p>

        <div className="adoption-pets-grid">
          {/* Aqui futuramente entraremos com o PetCard */}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="adoption-benefits">
        <h2>Por Que Adotar?</h2>

        <div className="adoption-benefits-grid">
          <div className="adoption-benefit-card">
            <FaHeart className="adoption-benefit-icon" />
            <h3>Salve uma Vida</h3>
            <p>Ofereça uma nova oportunidade para um animal.</p>
          </div>

          <div className="adoption-benefit-card">
            <FaHome className="adoption-benefit-icon" />

            <h3>Ganhe um Companheiro</h3>

            <p>Tenha ao seu lado um amigo fiel para toda a vida.</p>
          </div>

          <div className="adoption-benefit-card">
            <FaPaw className="adoption-benefit-icon" />

            <h3>Combata o Abandono</h3>

            <p>Ajude a reduzir o número de animais sem lar.</p>
          </div>

          <div className="adoption-benefit-card">
            <FaHandshake className="adoption-benefit-icon" />

            <h3>Faça a Diferença</h3>

            <p>Transforme a vida de um pet e também a sua.</p>
          </div>

          <div className="adoption-benefit-card">
            <FaShieldAlt className="adoption-benefit-icon" />

            <h3>Adoção Responsável</h3>

            <p>
              Todos os pets passam por acompanhamento para garantir uma adoção
              segura.
            </p>
          </div>
          <div className="adoption-benefit-card">
            <FaSyringe className="adoption-benefit-icon" />

            <h3>Pets Cuidados</h3>

            <p>
              Os animais recebem acompanhamento, vacinação e cuidados
              essenciais.
            </p>
          </div>
          <div className="adoption-benefit-card">
            <FaClipboardCheck className="adoption-benefit-icon" />

            <h3>Processo Seguro</h3>

            <p>
              Nossa equipe acompanha cada etapa para garantir o bem-estar do
              animal.
            </p>
          </div>

          <div className="adoption-benefit-card">
            <FaUsers className="adoption-benefit-icon" />

            <h3>Suporte da Equipe</h3>

            <p>Orientamos os tutores antes, durante e após a adoção.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="adoption-faq">
        <h2>Perguntas Frequentes</h2>

        <div className="adoption-faq-grid">
          <div className="adoption-faq-card">
            <h3>A adoção é gratuita?</h3>
            <p>Sim. O processo de adoção não possui custos.</p>
          </div>

          <div className="adoption-faq-card">
            <h3>Posso visitar o pet antes?</h3>
            <p>Sim. Recomendamos conhecer o pet antes da adoção.</p>
          </div>

          <div className="adoption-faq-card">
            <h3>Como funciona a análise?</h3>
            <p>
              Nossa equipe avaliará as informações para garantir o bem-estar do
              animal.
            </p>
          </div>
          <div className="adoption-faq-card">
            <h3>Posso adotar se já tiver outros animais?</h3>

            <p>
              Sim! Avaliamos cada caso para garantir uma convivência saudável e
              segura entre os pets.
            </p>
          </div>
          <div className="adoption-faq-card">
            <h3>O que preciso para adotar?</h3>

            <p>
              É necessário preencher a proposta de adoção e fornecer informações
              básicas para análise da equipe.
            </p>
          </div>
          <div className="adoption-faq-card">
            <h3>Quanto tempo leva o processo de adoção?</h3>

            <p>
              O prazo pode variar, mas nossa equipe busca realizar a análise e o
              contato o mais rápido possível.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="adoption-cta">
        <h2>Pronto para mudar uma vida?</h2>

        <p>
          Seu novo melhor amigo pode estar esperando por você neste momento.
        </p>

        <button>Enviar Proposta de Adoção</button>
      </section>
    </main>
  );
}

export default Adoption;
