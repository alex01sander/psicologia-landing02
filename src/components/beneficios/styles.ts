
import styled from 'styled-components';

interface BeneficiosProps {
  backgroundImage: string;
}


export const SectionContainer = styled.section<BeneficiosProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  position: relative;
  
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  text-align: center;
  color: #fff; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); 
    z-index: 1; 
  }

  > * {
    position: relative;
    z-index: 2; 
  }
`;


export const Title = styled.div`
 
  margin-bottom: 40px;
  color: white;
`;


export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
`;


export const BenefitCard = styled.div`
  
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;


`;


export const BenefitNumber = styled.div`
  background-color: #fff;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  border-radius: 4px;
  padding: 5px 15px;
  margin-right: 20px;
`;


export const BenefitContent = styled.div`
  text-align: left;


`;

export const BenefitTitle = styled.h3`
  font-size: 20px;
  
  color: #fff;
`;

export const BenefitDescription = styled.p`
  font-size: 16px;
  color: #ddd;

  p{
    color: white;
  }
`;


