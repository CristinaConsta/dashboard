import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Login from '../Views/Login';
import React, { useEffect, useState } from 'react';
import useAuth from "../services/firebase/useAuth";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

function NavigationBar(props) {

  const [show, setShow] = useState(false);
  const { signOut } = props; 
  const { user } = useAuth();

  const history = useHistory();

  function handleLogout()
  {
      signOut().then(() => {
        history.push("/");
        window.location.reload();
      });
  }

  return (
    <Navbar bg="danger" collapseOnSelect variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Solent</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href={user.email ? "/" : "/"}>Welcome</Navbar.Brand>
            <Navbar.Brand href={user.email ? "/Dashboard" : "/"}>Dashboard</Navbar.Brand>
            <Navbar.Brand href={user.email ? "/Charts" : "/"}>Evolution</Navbar.Brand>
          </Nav>
          <Nav>
            <Navbar.Brand>
              {user.email && "Welcome, " + user.email.substring(0, user.email.indexOf("@"))}
            </Navbar.Brand>
            { user.email
              ? <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => handleLogout()}>Sign out</Navbar.Brand>
              : <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => setShow(true)}>Login</Navbar.Brand>
              }
          </Nav>
        </Navbar.Collapse>
      </Container>        
      <Login show={show} close={() => setShow(false)} />
    </Navbar>
  );
}

export default NavigationBar;