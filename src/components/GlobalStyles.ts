// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  
  @import url('https://fonts.googleapis.com/css2?family=Alice&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Alice&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    
  }


  h1{
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 90px;
    line-height: 113px;
  }

  h2{
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 45px;
    line-height: 56px;
    color: #233e32;
  }

  h3{
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
    line-height: 28px;
    color: #2c2821;
  }
  h4{
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
    line-height: 28px;
    color: #233e32;
  }

  h5{
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 45px;
    line-height: 56px;
    color: #ffff;
  }

  p{
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    line-height: 29px;
    font-size: 20px;
    color: #2c2821;
  }

  Button{
    font-size: "Lora", serif;
    font-style: normal;
    font-weight: 800;
    line-height: 29px;
    font-size: 18px;
    
  }

  span{
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
    line-height: 56px;
    color: #ffff;
  }
`;

export default GlobalStyle;
