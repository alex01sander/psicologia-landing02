import styled from "styled-components";

export const Section = styled.section`
  background-color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  justify-content: center;

  img{
    width: 500px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ServiceGrid = styled.div`
  display: flex;
  justify-content: space-around;
  
  flex-direction:column;
  

  @media (min-width: 768px) {
    flex-direction: column; 
  }
`;

export const ServiceCard = styled.div`
 text-align: start;
  background-color: #f4ece4;
  padding: 2rem;
  margin: 1rem;
  
  p{
    margin-top: 20px;
  }

  
`;