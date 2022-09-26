import '../App.css';
import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Charts from './Charts';
import Dashboard from './Dashboard';
import Welcome from './Welcome';
import useAuth from "../services/firebase/useAuth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebase.js";
import NavigationBar from "../Components/NavigationBar";

const Main = (props) => { 

    const [menuOpen, setMenuOpen] = useState(false);
    const app = initializeApp(firebaseConfig);
    const { user, isAuthenticated, signUserOut } = useAuth();
    const location = useLocation();

    const handleClick = (e) => {
      // e.preventDefault();
      setMenuOpen(!menuOpen);
    //   console.log('App.handleClick()');
    };

    if(props.page === 'dashboard')
    {
        return (
            <div>
                <NavigationBar onClick={handleClick} open={menuOpen} signOut={signUserOut} />
                <Dashboard />
            </div>
        );
    }
    else if(props.page === 'charts')
    {
        return (
            <div>
                <NavigationBar onClick={handleClick} open={menuOpen} signOut={signUserOut} />
                <Charts />
            </div>
        )
    }
    else
    {
        return (
            <div>
                <NavigationBar onClick={handleClick} open={menuOpen} signOut={signUserOut} />
                <Welcome />
            </div>
        )
    }
}

export default Main;