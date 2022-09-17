import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Login = (props) => { 
    const StyledHeading1 = styled.h1`
    text-align: center;
    color: ${ props => props.theme.colors.purple};
`;

const StyledHeading2 = styled.h2`
    text-align: center;
    color: ${ props => props.theme.colors.purple};
`;

const StyledParagraph = styled.p`
    text-align: center;
    color: ${ props => props.theme.colors.purple};
`;

    return (
    <div>
        <StyledHeading1> Login </StyledHeading1>
        <StyledHeading2> OR </StyledHeading2>
        {/* <LoginForm
            onEmailSubmit={handleEmailSubmit}
            serverErrorMessage={severErrorMessage}
        /> */}
        <StyledParagraph>
            <Link to="/join">Not yet a member? - Join</Link>
        </StyledParagraph>
    </div>
);
};

Login.propTypes = {};

export default Login;
