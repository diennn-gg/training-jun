import React from "react";
import ButtonSignIn from "./ButtonSignIn";

const HomePage = () => {

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <p>Sign in with Google to chat</p>
      <ButtonSignIn/>
    </main>
  );
};

export default HomePage;
