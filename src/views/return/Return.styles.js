import { styled } from 'styled-components';

export const ReturnSection = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeBtn = styled.button`
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  transition: 150ms ease-in-out;

  &:hover{
    background-color: black;
    color: white;
  }
`