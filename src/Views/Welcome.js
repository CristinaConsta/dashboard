import React from "react";
import styled from "styled-components";
import WelcomeForm from "../Components/WelcomeForm";

const StyledHeading1 = styled.h1`
text-align: center;
color: ${ props => props.theme.colors.darkShade};
`;

const StyledHeading2 = styled.h2`
text-align: center;
color: ${ props => props.theme.colors.darkShade};
`;


const Welcome = (props) => { 

    return ( 
    <div>
        <StyledHeading1> Welcome to Solent University! </StyledHeading1> <br></br>
        {!props.isLoggedIn && <StyledHeading2>Please login to see your grades.</StyledHeading2>}
        <WelcomeForm/>
    </div>
);
};

Welcome.propTypes = {};

export default Welcome;
