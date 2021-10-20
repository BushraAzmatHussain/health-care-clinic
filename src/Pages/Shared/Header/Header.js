import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
  
  <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand className="fw-bold" href="#home">ENT Care Clinic</Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end fw-bold">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
    <Nav.Link as={HashLink} to="/about">About</Nav.Link>
    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
    <Nav.Link as={HashLink} to="/spacialists">Spacialists</Nav.Link>
    {
      user?.email?
      <Button onClick={logOut} variant="light">Logout</Button>:
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    }
    <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName || user.email}</a>
      </Navbar.Text>
    </Navbar.Collapse>

    </Container>
  </Navbar>
</>
    );
};

export default Header;