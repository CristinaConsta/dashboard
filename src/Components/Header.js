import React, { useEffect} from "react";
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../services/firebase/useAuth";
import NavigationBar from "./NavigationBar";

// function Menu(props) {  
//     const {open, onClick} = props;
//     const location = useLocation();
    
//   const StyledNav = styled.nav`
//   ul {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const StyledLi = styled.li`
//   margin-bottom: 10%;
//   cursor: pointer;
//   width: 100%;
//   text-align: center;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background:   ${({ theme, active }) => active ? theme.colors.darkShade[25] : ""}
// `;

// const StyledCloseParagraph = styled.p`
// text-align:right;
// `;


//     return (
//         <div>
//         {/* <StyledCloseParagraph onClick={onClick}> X </StyledCloseParagraph> */}
//         <Navbar >
//         <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//             {/* <Nav.Link href="#Welcome">Welcome</Nav.Link>
//             <Nav.Link href="#Login">Login</Nav.Link>
//             <Nav.Link href="#link">Dashboard</Nav.Link>
//             <Nav.Link href="#link">Evolution</Nav.Link> */}
//             <Nav.Link active={location.pathname == "/Welcome"} href="/"> Welcome</Nav.Link>
//             <Nav.Link active={location.pathname == "/login"} href="/Login">Login</Nav.Link>
//             <Nav.Link active={location.pathname == "/dashboard"} href="/Dashboard">Dashboard</Nav.Link>
//             <Nav.Link active={location.pathname == "/charts"} href="/Charts">Evolution</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         </Container>
//         {/* <StyledNav> */}
//           <ul>
//           {/* <StyledLi active={location.pathname == "/login"}> <Link to="/Login"> Login </Link> </StyledLi>
//           <StyledLi active={location.pathname == "/"} > <Link to="/"> Welcome </Link> </StyledLi>
//           <StyledLi active={location.pathname == "/profile"}> <Link to="/Profile"> Dashboard </Link> </StyledLi>
//           <StyledLi active={location.pathname == "/charts"}> <Link to="/Checkin"> Charts </Link> </StyledLi> */}
//           </ul>
//         {/* </StyledNav> */}
//         </Navbar>
//         </div>
//       )
//   };
  
//   Menu.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired
    
//   };

  function Header(props) {
    
    const {open, onClick, signOut} = props; 
    const { user } = useAuth();
  
    const handleClick = (e) => {
      e.preventDefault();
      onClick(e);    
      console.log('Header.handleClick()');
  }
  

  //   const handleClickBurgerMenu = (e) =>{
  //       e.preventDefault(true);
  //       onClick(e); 
  //       console.log('Header.handleClickBurgerMenu()');
  //   }
  
  //   const StyledBurgerMenu = styled.div`
  //   width: 90px;
  //   cursor: pointer;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   hr {
  //     margin: 4px 0 0 4px;
  //     width: 20%;
  //     border: 1px solid ${({ theme }) => theme.colors.darkShade[100]};
  //   }
  // `;

//   const StyledMenuWrapper = styled.div`
//   transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
//   height: 100vh;
//   width: 304px;
//   background: linear-gradient(180deg, #6fcf9d 0%, #67d2e8 100%);
//   position: absolute;
//   padding-top: 10%;
//   top: 0;
//   left: 0;
// `;

// const StyledMenuWrapper = styled.div`
//    height: 10px;
//    position: absolute;
//    padding-top: 5%;
//    top: 0;
//    left: 0;
//  `;

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
           
           {/* <StyledWrapper> 
             <StyledBurgerMenu onClick={handleClickBurgerMenu}>
               <hr />
               <hr />
               <hr />
               <hr />
             </StyledBurgerMenu>          
           </StyledWrapper> */}
           {/* <NavigationBar/> */}
        </div>
    );
}
    
    Header.propTypes = {
      onClick: PropTypes.func.isRequired,
      open: PropTypes.bool.isRequired
    };
    
    export default Header;
    