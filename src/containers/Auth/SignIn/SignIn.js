import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppContext } from "context/AppContext";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import fbService from "api/fbService";

import facebook from "assets/facebook.svg";
import google from "assets/google.svg";

import "./SignIn.scss";

const SignIn = (props) => {
  const context = useContext(AppContext);
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSignin = async () => {
    const user = await fbService.userService.signIn(credentials);
    context.dispatch({ type: "SET_USER", payload: { user } });
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/profile");
  };

  const changePage = () => {
    props.changePage();
  };

  return (
    <div className="app-signIn">
      <div className="app-signIn__form">
        <div className="app-signIn__form__btn">
          <Button
            className="app-signIn__form__btn__sign"
            onClick={handleSignin}
          >
            Sign In
          </Button>
          <Button className="app-signIn__form__btn__reg" onClick={changePage}>
            Register
          </Button>
        </div>
        <span>Email Address</span>
        <Input
          value={credentials.email}
          onChange={(e) => changeHandler("email", e.target.value)}
          placeholder="Email Address"
          className="app-signIn__input"
        />
        <span>Password</span>
        <Input
          value={credentials.password}
          onChange={(e) => changeHandler("password", e.target.value)}
          placeholder="Password"
          type="password"
          className="app-signIn__input"
        />
        <div className="app-signIn__form__checkbox">
          <input type="checkbox"></input>
          <label>Remember Me</label>
          <a href=""> Forgot your password?</a>
        </div>

        <Button className="app-signIn__form__submit" onClick={handleSignin}>
          Sign In
        </Button>
        <div className="app-signIn__form__reg">
          <a href="">Register now</a>
        </div>
        <div className="app-signIn__form__social">
          <h3>Express Sign In</h3>
          <Button className="app-signIn__form__social__fb" href="">
            <img src={facebook}></img>Sign In
          </Button>
          <Button className="app-signIn__form__social__google" href="">
            <img src={google}></img>Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
