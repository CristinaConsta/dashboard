import React, { useEffect, useState}  from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import logo from "../assets/Solent.png";
import Login from "../Views/Login";

function WelcomeForm(){

    //color: ${({ theme }) => theme.colors.darkShade[50]};

    const StyledUserAvatar = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    border-radius: 2px;
    img {margin-top: 8%;}
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

  const StyledImage = styled.img`
  position: auto;
  border-radius: 1%;
  width: 50%;
  margin-left: 25%;
  margin-rigth:25%;
`
const [show, setShow] = useState(false);

    return(
        <div>
        <StyledUserAvatar>
          <br></br>
          {/* <StyledButton onClick={() => setShow(true)}> Login </StyledButton>
          <Login show={show} close={() => setShow(false)} /> */}
          <StyledImage img src={logo} />
        </StyledUserAvatar>
        </div>
    )
};

WelcomeForm.propTypes = {};
export default WelcomeForm;