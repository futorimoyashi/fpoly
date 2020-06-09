import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { AuthContext } from '../Context/AuthContext'
import {
  Link
} from "react-router-dom";

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {isLogin} = useContext(AuthContext)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Fpoly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/home">Home</Link>
            </NavItem>
          </Nav>
          <NavLink>
            <Link to="/login">Login</Link>
          </NavLink>
          <NavLink  href="/login">
            isLogin {isLogin}
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu