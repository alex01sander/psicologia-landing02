import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
  margin-top: 50px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  h2 {
    font-size: 40px;
    color: #333;
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-size: 20px;
    color: #555;
    margin-bottom: 40px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
  }
`;

export const ContactForm = styled.form`
  
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 800px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.25);
  }
`;

export const Textarea = styled.textarea`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  height: 150px;
  resize: none;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.25);
  }
`;

export const Button = styled.button`
  padding: 15px;
  background: linear-gradient(135deg, #1a4a14, #233e32);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #0d300a, #001700);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #233e32;
  }
`;

export const SocialIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-right: 12px;
  border-radius: 50%;
  background: #f0f0f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 22px;
  transition: background 0.3s ease;
  color: black;

  &:hover {
    background: #233e32;
    color: #f0f0f0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px; 
  
  justify-content: center; 
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
