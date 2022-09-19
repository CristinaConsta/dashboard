import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAuth from "../services/firebase/useAuth";
import LoginForm from "../Components/LoginForm";

const Login = (props) => {
  
  const { signInEmailUser} = useAuth();
  const [severErrorMessage, setServerErrorMessage] = useState("");

  const handleEmailSubmit = async (data) => {
      console.log("Join.handleEmailSubmit(): data = ", data);

      try {
          const { email, password } = data;
          await signInEmailUser(email, password);
      } catch (e) {
          setServerErrorMessage(e.message);
          console.log(e);
      }
  };

  return (
    <>
      <Modal show={props.show} cancel={props.close} onHide={props.close} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm
                  onEmailSubmit={handleEmailSubmit}
                  serverErrorMessage={severErrorMessage}
              />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={props.close}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;