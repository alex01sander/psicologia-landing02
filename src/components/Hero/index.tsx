import React from "react";
import { HeroSection, Button, Overlay } from "./styles";
import logo from "../../image/floresta.jpg";

const Hero: React.FC = () => {
  return (
    <HeroSection backgroundImage={logo}>
      <div className="background-image"></div>
      <Overlay />
      <h1>
        Caminho da Mente: <br />
        Sua Jornada para o <br />
        Bem-Estar <br />
        Emocional
      </h1>
      <p>Descubra o equilíbrio emocional e o autoconhecimento com o Caminho da Mente.</p>
      <Button>Agende sua Consulta</Button>
    </HeroSection>
  );
};

export default Hero;
