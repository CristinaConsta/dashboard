import React, {useState} from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import WelcomeForm from "../Components/WelcomeForm";
import Login from "./Login";

const Welcome = (props) => { 

    const StyledHeading1 = styled.h1`
    text-align: center;
    color: ${ props => props.theme.colors.darkShade};
`;

const StyledHeading2 = styled.h2`
    text-align: center;
    color: ${ props => props.theme.colors.darkShade};
`;

const StyledButton = styled.button`
  border-color: ${ props => props.theme.colors.lightRed};
  color: ${ props => props.theme.colors.darkShade};
    position: absolute;
    top: 20%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;
const [show, setShow] = useState(false);

    return ( 
    <div>
        <StyledHeading1> Welcome to Solent University! </StyledHeading1> <br></br>
        <StyledHeading2>Please login to see your grades.</StyledHeading2>
        <StyledButton onClick={() => setShow(true)}> Login </StyledButton>
        <Login show={show} close={() => setShow(false)} />
        <WelcomeForm/>
    </div>
);
};

Welcome.propTypes = {};

export default Welcome;
