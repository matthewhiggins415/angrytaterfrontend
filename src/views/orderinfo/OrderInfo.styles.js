import styled from 'styled-components';
import { Link } from "react-router-dom";
import hotPotato from '../../assets/hotpotato.jpg';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  min-height: 90vh;
  height: auto;
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`


export const ImgContainer = styled.div` 
  background-image: url(${hotPotato});
  background-position: center;
  width: 500px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 768px) {
    width: 95%;
    background-size: contain;
    height: 220px;
  }
`


// theme font: 'Poppins' or 'Fredoka'
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f9f9f9;
  transition: border-color 0.2s;

  &:focus {
    border-color: #6c63ff;
    outline: none;
    background-color: #fff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f9f9f9;
  resize: none;
  min-height: 120px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #6c63ff;
    outline: none;
    background-color: #fff;
  }
`;

export const SubmitBtn = styled.button`
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5548d8;
  }
`;
