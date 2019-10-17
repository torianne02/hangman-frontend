import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">
        The Hangman Game
      </NavbarBrand>
    </Navbar>
  );
}

export default NavBar