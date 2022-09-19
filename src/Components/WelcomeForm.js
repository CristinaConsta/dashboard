import React, { useEffect} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import logo from "../assets/Solent.png";

function WelcomeForm(){

    //color: ${({ theme }) => theme.colors.darkShade[50]};

    const StyledUserAvatar = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    border-radius: 2px;
    img {margin-top: 8%;}
  `;

    return(
        <div>
        <StyledUserAvatar>
          {/* <h1> Welcome to Solent</h1> */}
          <br></br>
          {/* <span style={{ cursor: "pointer" }} onClick={() => signOut()}> (sign out) </span> */}
          <img src={logo} />
        </StyledUserAvatar>
        </div>
    )
};

WelcomeForm.propTypes = {};
export default WelcomeForm;