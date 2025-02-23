import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  min-height: 12vh;
  background-color: black;
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 8px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
`

export const LoginLink = styled(Link)`
  color: black;
  font-size: 18px;
  padding: 10px;
  position: absolute;
  right: 0px;
  text-decoration: none;
`