import React, { useState } from 'react';
import {NavbarLink, Nav, NavbarContaier, Brand, SignupButton} from './styles'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // Home, About, Team, Partners, Advisory Board, Contact Us, and Platform
  return (
    <NavbarContaier>
        <Nav>
            <Brand>YardSale</Brand>
            <div className = "menu">
                <NavbarLink>
                    <Link to="team"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Home</Link>
                </NavbarLink>
                <NavbarLink>
                    <Link to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>About</Link>
                </NavbarLink>
                <NavbarLink>
                    <Link to="team"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Team</Link>
                </NavbarLink>
                <NavbarLink to="/home">Contact</NavbarLink>
                <NavbarLink to="/login">
                  <SignupButton>Login</SignupButton>
                </NavbarLink>
            </div>
      </Nav>
    </NavbarContaier>
  );
}

export default Navbar;