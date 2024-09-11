// src/App.tsx
import React from 'react';
import BeneficiosTerapia from './components/beneficios';
import Hero from './components/Hero';
import Servicos from './components/services';
import About from './components/about';
import GlobalStyle from './components/GlobalStyles';
import Operation from './components/operation';
import StartJourney from './components/faq';
import Contact from './components/contact';
import Footer from './components/footer';



const App: React.FC = () => {
  return (
    <div >
      <GlobalStyle/>
      <Hero />
      <About />
      <Servicos />
      <Operation/>
      <BeneficiosTerapia />
      <StartJourney/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
