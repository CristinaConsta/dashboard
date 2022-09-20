import React, { useEffect} from "react";
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import NavigationBar from "./NavigationBar";

  function Header(props) {
    
    const {open, onClick, signOut} = props; 
    
  
    const handleClick = (e) => {
      e.preventDefault();
      onClick(e);    
      console.log('Header.handleClick()');
  }
  

  const StyledWrapper = styled.div`
    width: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.lightRed} 0%,
      ${({ theme }) => theme.colors.red} 100%
    );
    height: 50px;
    display: flex;
    justify-content: space-between;
  `;

    return (
        <div>          
       <StyledWrapper >
             <NavigationBar />
               </StyledWrapper>
        </div>
    );
}
    
    Header.propTypes = {
      onClick: PropTypes.func.isRequired,
      open: PropTypes.bool.isRequired
    };
    
    export default Header;
    