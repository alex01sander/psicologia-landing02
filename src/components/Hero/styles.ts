import styled from "styled-components";

interface HeroSectionProps {
  backgroundImage: string;
}

export const HeroSection = styled.section<HeroSectionProps>`
  position: relative;
  color: white;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start; 
  padding-left: 550px; 
  padding-top: 20px;
  overflow: hidden;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${props => props.backgroundImage}) no-repeat center center/cover;
    z-index: 0;
  }

  h1 {
    position: relative;
    z-index: 2;
    margin-left: 0;
    text-align: left;
  }

  p {
    position: relative;
    z-index: 2;
    margin-left: 0;
    text-align: left;
    color: white;
  }

  
  @media (max-width: 1200px) {
    padding-left: 300px; 
  }

  @media (max-width: 1024px) {
    padding-left: 100px; 
    height: 600px;

    h1 {
      font-size: 50px;
    }

    p {
      font-size: 18px;
      color: white;
    }
  }

  @media (max-width: 768px) {
    padding-left: 50px; 
    height: auto; 
    padding-top: 50px;

    h1 {
      font-size: 28px;
      text-align: left; 
    }

    p {
      font-size: 14px;
      text-align: left;
    }

    Button {
      align-self: flex-start; 
    }
  }

  @media (max-width: 480px) {
    padding-left: 20px; 
    padding-right: 20px;
    
    h1 {
      font-size: 24px; 
    }

    p {
      font-size: 12px; 
    }

    Button {
      padding: 0.8rem 1.5rem; 
    }
  }


  
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); 
  z-index: 1;
`;

export const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 2;
  margin-left: 0;
  font-size: 18px;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 14px;
  }
`;
