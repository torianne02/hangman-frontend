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
      <Nav className="nav">
        <NavItem>
          <NavLink tag={Link} to="/login">Log In</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar