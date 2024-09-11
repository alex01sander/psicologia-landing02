import { Section, ServiceGrid, ServiceCard } from "./styles";
import service from "../../image/service.jpg"

const Servicos: React.FC = () => {

  
    return (
      <Section>
        <img src={service} alt="service" />
        <ServiceGrid>
        <h2>Serviços Oferecidos</h2>
          <ServiceCard>
            <h3>Terapia Individual</h3>
            <p>Sessões personalizadas para superar desafios <br /> emocionais e promover o crescimento pessoal.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Aconselhamento Emocional</h3>
            <p>Suporte especializado para lidar com transições de <br />vida e relacionamentos.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Orientação para Autoconhecimento</h3>
            <p>Ferramentas e técnicas para explorar emoções, metas <br />e valores pessoais.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Sessões Online</h3>
            <p>Atendimentos virtuais flexíveis para garantir acesso <br />ao suporte psicológico.</p>
          </ServiceCard>
        </ServiceGrid>
      </Section>
    );
  };
  
  export default Servicos;