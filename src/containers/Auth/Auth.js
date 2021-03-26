import React, { useState, useContext } from "react";

import { AppContext } from "context/AppContext";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import "./Auth.scss";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const context = useContext(AppContext);

  const toggleView = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="app-auth">
      <div className="app-auth-form">
        {isSignIn ? (
          <SignIn changePage={toggleView} />
        ) : (
          <SignUp changePage={toggleView} />
        )}
      </div>
    </div>
  );
};

export default Auth;
