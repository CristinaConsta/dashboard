import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, FormGroup } from 'react-bootstrap';
import useAuth from "../services/firebase/useAuth";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";


const Login = (props) => {
  
  const theme = props;

  const { signInEmailUser} = useAuth();
  const [severErrorMessage, setServerErrorMessage] = useState("");

  const history = useHistory();

  const handleEmailSubmit = async (data) => {
      // console.log("Login.handleEmailSubmit(): data = ", data);

      try {
          const { email, password } = data;
          await signInEmailUser(email, password);
      } catch (e) {
          setServerErrorMessage(e.message);
          console.log(e);
      }

      history.push("/welcomeUser");
      window.location.reload();
  };

  const schema = yup.object().shape({
      email: yup
          .string()
          .email("email is not valid")
          .required("you must enter an email"),
      password: yup
          .string()
          .required("password is required")
          .min(2, "password must be at least longer than two letters"),
  });

  const {
      register,
      formState: { errors },
      handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <Modal show={props.show} onHide={props.close} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form id="loginForm" onSubmit={handleSubmit(handleEmailSubmit)}>
            <FormGroup>
              <label htmlFor="inputUserName">Username</label>
              <input className="form-control" type='email' {...register("email", { required: true })}/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="inputPassword">Password</label>
              <input className='form-control' type='password' {...register("password", { required: true })}/>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button type="submit" form="loginForm" style={{ background: "#FF0000"}}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

Login.propTypes={}

export default Login;