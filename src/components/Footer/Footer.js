import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import NavLink from "components/NavLink/NavLink";
import { AppContext } from "context/AppContext";

import "./Footer.scss";

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

const Footer = () => {
  const context = useContext(AppContext);

  return (
    <div className="app-footer">
      <nav>
        <ul className="app-footer__ul">
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

export default withRouter(Footer);
