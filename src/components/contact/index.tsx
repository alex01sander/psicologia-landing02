import React from 'react';
import { Section, Content, ContactForm, Input, Textarea, Button, SocialLinks, SocialLink, SocialIcon, Container } from './styles';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';





const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Content>
        <h2>Contato</h2>
        <p>Entre em contato conosco para agendar uma consulta ou tirar dúvidas.</p>
        <Container>
          <ContactForm >
            <Input type="text" placeholder="Seu nome" required />
            <Input type="email" placeholder="Seu e-mail" required />
            <Textarea placeholder="Sua mensagem" required></Textarea>
            <Button type="submit">Enviar</Button>
          </ContactForm>
          <SocialLinks >
            <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon><FaFacebookF /></SocialIcon>
              Facebook
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon><FaTwitter /></SocialIcon>
              Twitter
            </SocialLink>
            <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon><FaInstagram /></SocialIcon>
              Instagram
            </SocialLink>
          </SocialLinks>
        </Container>
      </Content>
    </Section>
  );
};

export default Contact;
