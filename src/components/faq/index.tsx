// StartJourney.js

import { JourneyContainer, StepContainer, Step, StepNumber, StepTitle, StepDescription } from "./styles";



const StartJourney = () => {
  return (
    <JourneyContainer>
      <h2>Comece Sua Jornada Hoje</h2>
      <StepContainer>
        <Step>
          <StepNumber>1</StepNumber>
          <StepTitle>Entre em Contato</StepTitle>
          <StepDescription>Envie um e-mail ou ligue para <br />agendar sua consulta inicial.</StepDescription>
        </Step>
        <Step>
          <h2>2</h2>
          <StepTitle><h3>Consulta Inicial</h3></StepTitle>
          <StepDescription>Converse sobre suas <br />necessidades e objetivos em <br />um ambiente acolhedor.</StepDescription>
        </Step>
        <Step>
          <StepNumber>3</StepNumber>
          <StepTitle>Inicie seu Caminho</StepTitle>
          <StepDescription>Comece sua jornada de <br />autodescoberta e <br />crescimento pessoal.</StepDescription>
        </Step>
      </StepContainer>
    </JourneyContainer>
  );
};

export default StartJourney;
