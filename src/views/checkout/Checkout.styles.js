import styled from 'styled-components';
import { Link } from "react-router-dom";
import boxImg from '../../assets/box.jpg'

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: auto;
  padding: 10px;
  background-color: rgba(197, 0, 76, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: auto;
  justify-content: space-evenly;
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 20px;

  p {
    font-size: 22px;
    color: white;
  }
`

export const Input = styled.input`
  border: none;
  padding: 5px;
  margin-top: 5px;
  outline: none;
  font-size: 16px;
`

export const TextArea = styled.textarea`
 width: auto;
  height: 150px;
  margin-top: 5px;
  text-align: left;
  vertical-align: top;
  line-height: normal;
  padding: none;
  padding: 5px;
  font-size: 16px;
`

export const ImgContainer = styled.div`  
  background-image: url(${boxImg});
  background-size: max(200px, 350px);
  background-position: center;
  width: 350px;
  height: 400px;
  border-radius: 20px;
  border: 4px solid white;
  background-color: rgba(255, 215, 42, 0.8);
  background-repeat: no-repeat;
  margin-top: 20px;
`

export const SubmitBtn = styled.button`
  padding: 10px;
  font-size: 22px;
  font-weight: 500;
  border: 2px solid white;
  color: white;
  background-color: transparent;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px;
`