import React from "react";
import { auth } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ButtonSignIn from "./ButtonSignIn";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>Chat app</h1>
      { user ? 
        ( <button onClick={signOut} className="sign-out" type="button">Sign Out</button> ) 
        : 
        ( <ButtonSignIn/> )
      }
    </nav>
  );
};

export default NavBar;