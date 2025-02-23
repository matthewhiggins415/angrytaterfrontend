import React from 'react';
import { NavbarContainer, StyledLink, LoginLink } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledLink to='/'>angrytaters.com</StyledLink>
      <LoginLink to='/login'>Login</LoginLink>
    </NavbarContainer>
  )
}

export default Navbar