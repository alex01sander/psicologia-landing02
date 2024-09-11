import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 2rem;
  align-items: flex-start;
  padding-left: 550px;

  @media (max-width: 1200px) {
    padding-left: 300px; 
  }

  @media (max-width: 1024px) {
    padding-left: 100px; 
  }

  @media (max-width: 768px) {
    padding-left: 50px; 
  }

  @media (max-width: 576px) {
    padding-left: 20px; 
    padding-right: 20px; 
  }
`;

export const Grid = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 2rem;
  
  /* Responsividade */
  @media (max-width: 1024px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Ajustes de largura */
  @media (max-width: 768px) {
    width: 100%; 
  }
`;
