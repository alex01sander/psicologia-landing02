import { TimelineContainer, Step, StepNumber, StepContent, StepTitle, StepDescription, Container, ContainerContent, Content, StepContainer } from "./styles";
import image from  "../../image/operation.jpg"


const Operation = () => {
  return (
    <>  
        <Container>
            <TimelineContainer>
               
                <Step>
                    <StepNumber><h3>1</h3></StepNumber>
                    <StepContent>
                    <StepTitle><h3>Consulta Inicial</h3></StepTitle>
                    <StepDescription>
                    <p> Agendamos um primeiro encontro para entender suas necessidades e objetivos.</p>
                    </StepDescription>
                    </StepContent>
                </Step>

                <Step>
                    <StepNumber><h3>2</h3></StepNumber>
                    <StepContent>
                    <StepTitle><h3>Elaboramos juntos um plano de tratamento adaptado aos seus desafios.</h3></StepTitle>
                    <StepDescription>
                        <p>Elaboramos juntos um plano de tratamento adaptado aos seus desafios.</p>
                    </StepDescription>
                    </StepContent>
                </Step>

                <Step>
                    <StepNumber>
                        <h3>3</h3>
                    </StepNumber>
                    <StepContent>
                    <StepTitle>
                        <h3>Acompanhamento Contínuo</h3>
                    </StepTitle>
                    <StepDescription>
                        <p>Monitoramos seu progresso e ajustamos o plano conforme necessário.</p>
                    </StepDescription>
                    </StepContent>
                </Step>
            </TimelineContainer>
                <img src={image} alt="operation" />
        </Container>
        <ContainerContent>
            <h5>Por Que Escolher o Caminho da Mente?</h5>
            <Content>
                <StepContainer>
                    <h4>Abordagem <br />Personalizada</h4>
                    <p>Cada pessoa é única. Nosso <br />atendimento é ajustado às <br/>suas necessidades específicas.</p>
                </StepContainer>
                <StepContainer>
                    <h4>Ambiente Seguro</h4>
                    <p>Oferecemos um espaço <br />acolhedor para explorar suas <br />emoções com confiança.</p>
                </StepContainer>
                <StepContainer>
                    <h4>Experiência e <br />Compromisso</h4>
                    <p>Nossa formação sólida e <br />abordagem empática <br />arantem suporte de <br />qualidade.</p>
                </StepContainer>
            </Content>
        </ContainerContent>
        
    </>
    
  );
};

export default Operation    ;
