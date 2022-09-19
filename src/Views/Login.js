import React, {useState} from "react";
import styled from "styled-components";
import LoginForm from "../Components/LoginForm";
import { Link } from "react-router-dom";
import useAuth from "../services/firebase/useAuth";

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
        <div>
            <StyledHeading1> Login </StyledHeading1>
            <LoginForm
                onEmailSubmit={handleEmailSubmit}
                serverErrorMessage={severErrorMessage}
            />
        </div>
    );
};

Login.propTypes = {};

export default Login;

