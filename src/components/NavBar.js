import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Navbar, 
  NavbarBrand, 
  NavItem, 
  NavLink, 
  Nav 
} from 'reactstrap';
import hangman from '../images/hangman.png';

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">
        <img src={hangman} alt="hangman logo" />
      </NavbarBrand>
    </Navbar>
  );
}

export default NavBar