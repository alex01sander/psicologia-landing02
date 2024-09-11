import styled from 'styled-components';

export const JourneyContainer = styled.div`
  margin: 20px;
  text-align: center;

 
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Step = styled.div`
   background-color: #f4f4f4;
  padding: 0;
  margin: 0;
  width: 20%; 
  text-align: center;
  position: relative;
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%);


`;

export const StepNumber = styled.h2`
  font-size: 48px;
  color: #233e32;
  
  
`;

export const StepTitle = styled.h3`
  margin-bottom: 10px;
  text-align: center;
`;

export const StepDescription = styled.p`
 
  font-size: 18px;
`;

