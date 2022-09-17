import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Login from "./Views/Login.js";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import { Switch, Route, useLocation, Redirect} from "react-router-dom";
import Charts from './Views/Charts';
import Dashboard from './Views/Dashboard';
import Welcome from './Views/Welcome';
import Header from './Components/Header';
import useAuth from "./services/firebase/useAuth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase.js";

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
                pathname: "/login",
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
        <Header onClick={handleClick} open={menuOpen} signOut={signUserOut}  />
        <GlobalStyles />
        <div onClick={handleOutsideClick}>  
          <Switch>
                      
          <Route path="/">
              <Welcome />
          </Route>

          <Protected authenticated={isAuthenticated} exact path="/dashboard">
           <Dashboard />
          </Protected>

          <Protected authenticated={isAuthenticated} exact path="/charts">
           <Charts />
          </Protected>

          <Route path="/login">
              <Login />
          </Route>

           </Switch>
          </div>
      </ThemeProvider>
    </div>
  );
}
  

export default App;
