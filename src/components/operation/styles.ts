import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap; 
  padding: 20px;
  box-sizing: border-box; 

  img {
    width: 300px;
    height: 700px;
    max-width: 300px; 
    height: auto; 
    padding: 10px;
    object-fit: cover;
  }
`;


export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 50px;
  max-width: 600px;
  width: 100%;
  padding-bottom: 100px;
  box-sizing: border-box; 
  
  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    padding-left: 30px;
    &::before {
      left: 20px;
    }
  }

  @media (max-width: 480px) {
    padding-left: 15px;
    &::before {
      left: 10px;
    }
  }
`;


export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


export const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f4ece4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #2c2821;
  margin-right: 20px;
  position: absolute;
  left: -45px;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    left: -30px;
    width: 25px;
    height: 25px;
    font-size: 14px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    left: -20px;
    width: 20px;
    height: 20px;
    font-size: 12px;
    padding: 5px;
  }
`;


export const StepContent = styled.div`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const StepTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 10px 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StepDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 50px;

  h5{
    color: #233e32;
  }
`

export const Content = styled.div`
    display: flex;
    padding: 20px;
    margin-top: 20px;
    gap: 50px;

    
`

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
    
    justify-content: center;

  p{
    
    margin-top: 20px;
    }
`