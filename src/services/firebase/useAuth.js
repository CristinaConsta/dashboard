import { useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
  
  function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({}); 
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setIsAuthenticated(true);
        setUser(auth.currentUser);
        return;
      }
      setIsAuthenticated(false);
      return;
    });
  
    const signInEmailUser = (email, password) =>
      signInWithEmailAndPassword(auth, email, password);
  
    const signUserOut = () => signOut(auth);

    return {isAuthenticated, signInEmailUser, signUserOut, user };
  }

export default useAuth;