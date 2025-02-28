import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const SingleOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 10px;
`

export const OrderDetailsBtn = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
`

export const LogoutBtn = styled.button`
  padding: 5px 20px;
  max-width: 100px;
  text-align: center;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 0px auto;
  margin-top: 20px;
`