import React from "react";
import { Container, Nav, NavbarBrand, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-primary navbar-expand">
      <Container>
        <NavbarBrand className="text-white">SD4Y</NavbarBrand>
        <Nav>
          <Nav.Item>
            <Link to="/students" className="nav-link text-white">
              STUDENTS
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addstudent" className="nav-link text-white">
              ADD
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link text-white">
              SIGN IN
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/register" className="nav-link text-white">
              SIGN UP
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
