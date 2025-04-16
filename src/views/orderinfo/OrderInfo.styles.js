import styled from 'styled-components';
import { Link } from "react-router-dom";
import boxImg from '../../assets/box.jpg';
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 500px;
  height: auto;
  background-color: #c4ffd1;
  border-radius: 20px;
  margin-top: 20px;
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
  p {
    font-size: 22px;
    color: black;
    margin-bottom: 20px;
  }
`

export const Input = styled.input`
  border: none;
  width: 80%;
  padding: 10px;
  margin-top: 5px;
  outline: none;
  font-size: 16px;
  background-color: #fcfffd;
  border-radius: 4px;
  font-weight: 200;
`
export const TextArea = styled.textarea`
  width: 80%;
  height: 150px;
  margin-top: 5px;
  text-align: left;
  vertical-align: top;
  line-height: normal;
  padding: none;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fcfffd;
`
export const ImgContainer = styled.div`  
  background-image: url(${hotPotato});
  background-position: center;
  width: 500px;
  height: 400px;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 95%;
    background-size: contain;
    height: 220px;
}
`
export const SubmitBtn = styled.button`
  width: 80%;
  padding: 10px;
  font-size: 22px;
  font-weight: 500;
  border: 2px solid black;
  color: black;
  background-color: transparent;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 4px;
  transition: 150ms ease-in-out;

  &:hover { 
    background-color: black;
    color: #c4ffd1;
  }
`