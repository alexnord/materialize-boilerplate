import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand>
        <Link to="/" style={{ color: 'white' }}>Materialize Boilerplate</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="nav-link">
            <Link to="/login" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Login</Link>
          </div>
          <div className="nav-link">
            <Link to="/register" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Register</Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
