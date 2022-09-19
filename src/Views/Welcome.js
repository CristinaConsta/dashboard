import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WelcomeForm from "../Components/WelcomeForm";


const Welcome = (props) => { 

    const StyledHeading1 = styled.h1`
    text-align: center;
    color: ${ props => props.theme.colors.red};
`;

const StyledHeading2 = styled.h2`
    text-align: center;
    color: ${ props => props.theme.colors.red};
`;

// const StyledParagraph = styled.p`
//     text-align: center;
//     color: ${ props => props.theme.colors.purple};
// `;

    return (
    <div>
        <StyledHeading1> Welcome to Solent University! </StyledHeading1>
        <StyledHeading2>Please login to see your grades.</StyledHeading2>
        <WelcomeForm/>
    </div>
);
};

Welcome.propTypes = {};

export default Welcome;
