import { LuBrain } from "react-icons/lu";
import { Section, Grid, Card } from "./styles";
import { CiHeart } from "react-icons/ci";
import { GiConvergenceTarget } from "react-icons/gi";

const About: React.FC = () => {
    return (
      <Section>
        <h2>Quem é Alex?</h2>
        <Grid>
          <Card>
            <LuBrain size={'50'} color="#233e32"/>
            <h3>Formação Sólida</h3>
            <p>Psicólogo especializado com <br/>vasta experiência em saúde <br />mental.</p>
          </Card>
          <Card>
            <CiHeart size={'50'} color="#233e32"/>
            <h3>Empatia</h3>
            <p>Abordagem acolhedora e <br/>compreensiva para cada <br/>paciente.</p>
          </Card>
          <Card>
            <GiConvergenceTarget size={'50'} color="#233e32"/>
            <h3>Personalização</h3>
            <p>Tratamento adaptado às <br/>necessidades únicas de cada <br/>indivíduo.</p>
          </Card>
        </Grid>
      </Section>
    );
  };
  
  export default About;