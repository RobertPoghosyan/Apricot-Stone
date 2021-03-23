import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppContext } from "context/AppContext";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import fbService from "api/fbService";
import ErrorMessage from "components/Errors/ErrorMessage/ErrorMessage";
import { validateMail, validatePassword } from "utils/inputValidation";

import facebook from "assets/facebook.svg";
import google from "assets/google.svg";

import "./SignUp.scss";

const SignUp = (props) => {
  const context = useContext(AppContext);
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorState, setErrorstate] = useState({
    emailError: "",
    passwordError: "",
  });

  const changeHandler = (e) => {
    setErrorstate({
      emailError: "",
      passwordError: "",
    });

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      const user = await fbService.userService.signUp(credentials);
      context.dispatch({ type: "SET_USER", payload: { user } });
      localStorage.setItem("user", JSON.stringify(user));
      setLoading(false);
      history.push("/profile");
    } catch (err) {
      setErrorstate(
        validateMail(credentials.email) === false
          ? { emailError: "The email address is not valid" }
          : validatePassword(credentials.password) === false
          ? { passwordError: "Password is not valid" }
          : null
      );
      setLoading(false);
    } finally {
    }
  };

  const changePage = () => {
    props.changePage();
  };

  return (
    <div className="app-signUp">
      <div className="app-signUp__form">
        <div className="app-signUp__form__btn">
          <Button className="app-signUp__form__btn__sign" onClick={changePage}>
            Sign In
          </Button>
          <Button className="app-signUp__form__btn__reg" onClick={handleSignup}>
            Register
          </Button>
        </div>
        <span>Username</span>
        <Input
          name="name"
          value={credentials.name}
          onChange={changeHandler}
          placeholder="Enter Your Name Here"
          className="app-signUp__input"
          loading={loading}
        />
        <span>Email Address</span>
        <Input
          name="email"
          value={credentials.email}
          onChange={changeHandler}
          placeholder="Enter Your Email Address Here"
          className="app-signUp__input"
          loading={loading}
        />
        <ErrorMessage text={errorState.emailError} />
        <span>Password</span>
        <Input
          name="password"
          value={credentials.password}
          onChange={changeHandler}
          placeholder="Enter Your Password Here"
          type="password"
          className="app-signUp__input"
          loading={loading}
        />
        <ErrorMessage text={errorState.passwordError} />
        <span>Repeat Password</span>
        <Input
          name="passwordRep"
          value={credentials.password}
          onChange={changeHandler}
          placeholder="Repeat Your Password Here"
          type="password"
          className="app-signUp__input"
          loading={loading}
        />
        <div className="app-signUp__form__checkbox">
          <input type="checkbox"></input>
          <label className="robot">I'm Not a Robot</label>
          <input type="checkbox"></input>
          <span className="remember">Remember Me</span>
        </div>
        <Button
          className="app-signUp__form__submit"
          onClick={handleSignup}
          disabled={loading}
        >
          {" "}
          Create Your Account{" "}
        </Button>
        <div className="app-signUp__form__reg">
          <span>
            {" "}
            Have An account? <a href="">Sign In</a>{" "}
          </span>
        </div>
        <div className="app-signUp__form__social">
          <h3>Or Register With:</h3>
          <Button className="app-signUp__form__social__fb" href="">
            <img src={facebook}></img>Sign In
          </Button>
          <Button className="app-signUp__form__social__google" href="">
            <img src={google}></img>Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
