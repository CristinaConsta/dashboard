import React, { useEffect, useState}  from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import logo from "../assets/Solent.png";
import Login from "../Views/Login";

const StyledUserAvatar = styled.div`
width: 100%;
display: flex;
align-items: flex-end;
border-radius: 2px;
img {margin-top: 8%;}
`;

const StyledImage = styled.img`
position: auto;
border-radius: 1%;
width: 50%;
margin-left: 25%;
margin-rigth:25%;
`;

function WelcomeForm(){

    return(
        <div>
        <StyledUserAvatar>
          <br></br>
          <StyledImage img src={logo} />
        </StyledUserAvatar>
        </div>
    )
};

WelcomeForm.propTypes = {};

export default WelcomeForm;