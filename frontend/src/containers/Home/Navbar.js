import React, { useState } from 'react';
import {NavLink, Nav, NavbarContaier, Brand, SignupButton} from './styles'


const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // Home, About, Team, Partners, Advisory Board, Contact Us, and Platform
  return (
    <NavbarContaier>
        <Nav>
            <Brand>YardSale</Brand>
            <div className = "menu">
            
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Team</NavLink>
                <NavLink>Contact</NavLink>
                <SignupButton>Signup</SignupButton>
                
            </div>
      </Nav>
    </NavbarContaier>
  );
}

export default Navbar;