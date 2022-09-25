import './App.css';
import React, { useState, useEffect } from "react";
import Login from "./Views/Login";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import { Switch, Route, useLocation, Redirect, BrowserRouter } from "react-router-dom";
import Charts from './Views/Charts';
import Dashboard from './Views/Dashboard';
import Welcome from './Views/Welcome';
import useAuth from "./services/firebase/useAuth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase.js";
import NavigationBar from "./Components/NavigationBar";
import Main from './Views/Main';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const app = initializeApp(firebaseConfig);
  const { user, isAuthenticated, signUserOut } = useAuth();
  const location = useLocation();

  const handleClick = (e) => {
    // e.preventDefault();
    setMenuOpen(!menuOpen);
    console.log('App.handleClick()');
  };

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
  useEffect(() => {
    setMenuOpen(false)
  }, [location]);

  console.log(isAuthenticated)
  console.log(user)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div onClick={handleClick}>
          <Switch>
            <Route exact path="/">
              <Main user={user} page={'welcome'} />
            </Route>
            <Route exact path="/Dashboard">
              <Main user={user} page={'dashboard'} />
            </Route>
            <Route exact path="/charts">
              <Main user={user} page={'charts'} />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}


export default App;
