import React from 'react';
import { NavbarContainer, StyledLink } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledLink to='/'>angrytaters.com</StyledLink>
    </NavbarContainer>
  )
}

export default Navbar