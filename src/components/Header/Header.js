import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import NavLink from "components/NavLink/NavLink";
import { AppContext } from "context/AppContext";

import logo from "assets/logo.png";

import "./Header.scss";

const headerNavLinks = [
  {
    title: "Homepage",
    to: "/",
  },
  {
    title: "Posts",
    to: "/posts",
  },
  {
    title: "Tours",
    to: "/todos",
  },
];

const Header = () => {
  const context = useContext(AppContext);

  return (
    <div className="app-header">
      <div className="app-header__logo">
        <img src={logo} alt="logo" width="64px" height="64px"></img>
      </div>
      <nav>
        <ul className="app-header__ul">
          {headerNavLinks.map((el) => {
            return (
              <li key={el.title}>
                <NavLink to={el.to}>{el.title}</NavLink>
              </li>
            );
          })}
          {!context.state.user ? (
            <li key="auth">
              <NavLink to="/auth">Authentication</NavLink>
            </li>
          ) : (
            <li key="profile">
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Header);
