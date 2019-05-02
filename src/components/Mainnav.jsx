import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Mainnav = () => (
  <Nav className="mainNav">
    <NavItem>
      <NavLink href="/">Gestion des classes</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/">Classe 1</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/" disabled>Classe 2</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/" disabled>Classe 3</NavLink>
    </NavItem>
  </Nav>
);

export default Mainnav;
