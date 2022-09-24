import './App.css';
import React, {useState, useEffect} from "react";
import Login from "./Views/Login";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import { Switch, Route, useLocation, Redirect, BrowserRouter} from "react-router-dom";
import Charts from './Views/Charts';
import Dashboard from './Views/Dashboard';
import Welcome from './Views/Welcome';
import useAuth from "./services/firebase/useAuth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase.js";
import NavigationBar from "./Components/NavigationBar";


function App() {


  const [menuOpen, setMenuOpen] = useState(false);
  const app = initializeApp(firebaseConfig);
  const { isAuthenticated, signUserOut } = useAuth();
  const location = useLocation();


  const handleClick = (e) => {
    // e.preventDefault();
    setMenuOpen(!menuOpen);
    console.log('App.handleClick()');
  };

  const handleOutsideClick = (e) => {
    //e.preventDefault();
    setMenuOpen(false);
    console.log('App.handleOutsideClick()');
  };

  useEffect(() =>{
    setMenuOpen(false)
  },[location]);


  function Protected({ authenticated, children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          authenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }  


  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar onClick={handleClick} open={menuOpen} signOut={signUserOut}  />
        <GlobalStyles />
        <div onClick={handleOutsideClick}>  
          <Switch>  
            <Route exact path="/" component={Welcome}/>
            <Protected authenticated={isAuthenticated} exact path="/Dashboard" >
              <Dashboard/>
            </Protected>
            <Protected authenticated={isAuthenticated} exact path="/Charts"/>
              <Charts/>
            <Protected/>
            {/* <Route exact path="/Login" component={Login}/> */}
           </Switch>
          </div>
      </ThemeProvider>
    </div>
  );
}
  

export default App;
