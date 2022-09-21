import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Login from '../Views/Login';
import React, { useState } from 'react';


function NavigationBar(props) {

  const [show, setShow] = useState(false);
  // const {open, onClick, signOut} = props; 
    
  return (
    <Navbar collapseOnSelect variant="light" expand="lg" sticky="top" className="coloured-nav">
      <Container>
        <Navbar.Brand href="#Welcome">Solent</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classname="navigation">
            <Nav.Link href="/">Welcome</Nav.Link>
            <Nav.Link onClick={() => setShow(true)}>Login</Nav.Link>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/Charts">Evolution</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>        
      <Login show={show} close={() => setShow(false)} />
    </Navbar>
  );
}

export default NavigationBar;