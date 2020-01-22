import React, { useState } from 'react';
import {Link, Nav, NavbarContaier, Brand, SignupButton} from './styles'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // Home, About, Team, Partners, Advisory Board, Contact Us, and Platform
  return (
    <NavbarContaier>
        <Nav>
            <Brand>YardSale</Brand>
            <div className = "menu">
                <Link to="/home">Home</Link>
                <Link to="/home">About</Link>
                <Link to="/home">Team</Link>
                <Link to="/home">Contact</Link>
                <Link to="/login">
                  <SignupButton>Login</SignupButton>
                </Link>
            </div>
      </Nav>
    </NavbarContaier>
  );
}

export default Navbar;