import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ChartForm from "../Components/ChartsForm";

const Charts = (props) => { 
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
    <div style={{height: "100vh"}}>
        {/* <StyledHeading1> Charts </StyledHeading1> */}
        <ChartForm/>
    </div>
);
};

Charts.propTypes = {};

export default Charts;
