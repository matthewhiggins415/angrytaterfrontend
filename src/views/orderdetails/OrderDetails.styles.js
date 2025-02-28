import { styled } from 'styled-components';

export const OrderDetailsContainer = styled.div`
  height: 90vh;
  width: 100%;
  padding: 10px;
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;

  p {
    margin-top: 5px;
  }
`

export const BackBtn = styled.button`
  padding: 5px 20px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 4px;
`