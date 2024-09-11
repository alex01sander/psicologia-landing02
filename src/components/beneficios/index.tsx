import { SectionContainer, Title, BenefitsGrid, BenefitCard, BenefitNumber, BenefitContent, BenefitTitle, BenefitDescription } from "./styles";
import beneficio from '../../image/terapia.jpg'


const BenefitsSection = () => {
  return (
    <>
 
      <SectionContainer backgroundImage={beneficio}>
      
        <Title>
          <h5>Benefícios da Terapia</h5>
          
        </Title>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitNumber>1</BenefitNumber>
            <BenefitContent>
              <BenefitTitle>
                <span>Alívio do Estresse</span>
              </BenefitTitle>
              <BenefitDescription>
                <p>Aprenda técnicas eficazes para gerenciar o <br />estresse diário.</p>
              </BenefitDescription>
            </BenefitContent>
          </BenefitCard>

          <BenefitCard>
            <BenefitNumber>2</BenefitNumber>
            <BenefitContent>
              <BenefitTitle><span>Melhora nos Relacionamentos</span></BenefitTitle>
              <BenefitDescription>
                <p>Desenvolva habilidades de comunicação e <br />empatia para fortalecer suas conexões.</p>
              </BenefitDescription>
            </BenefitContent>
          </BenefitCard>

          <BenefitCard>
            <BenefitNumber>3</BenefitNumber>
            <BenefitContent>
              <BenefitTitle><span>Aumento da Autoestima</span></BenefitTitle>
              <BenefitDescription>
                <p>Cultive uma visão positiva de si mesmo e <br />aumente sua confiança.</p>
              </BenefitDescription>
            </BenefitContent>
          </BenefitCard>

          <BenefitCard>
            <BenefitNumber>4</BenefitNumber>
            <BenefitContent>
              <BenefitTitle><span>Clareza Mental</span></BenefitTitle>
              <BenefitDescription>
                <p>Ganhe perspectiva sobre seus desafios e <br />tome decisões mais conscientes.</p>
              </BenefitDescription>
            </BenefitContent>
          </BenefitCard>
        </BenefitsGrid>
      </SectionContainer>
    </>
  );
};

export default BenefitsSection;
