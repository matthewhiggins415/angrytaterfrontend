import styled from 'styled-components';

export const ScreenContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 18px;
  border-radius: 10px;
  background-color: #0099ff;
`

export const Input = styled.input`
  padding: 10px; 
  width: 100%;
  border-radius: 4px;
  border: none;
  outline: none;
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`

export const SubmitBtn = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
`