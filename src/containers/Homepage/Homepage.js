import React, { Component } from "react";

import Footer from "components/Footer/Footer";

import apricotStone from "assets/apricotStone.gif";
import saryan from "assets/saryan.jpg";
import minas from "assets/minas.jpg";

import "./Homepage.scss";

export class Homepage extends Component {
  render() {
    return (
      <div className="app-homepage">
        <div className="app-homepage__logo">
          <img
            src={apricotStone}
            heigth="760px"
            width="760px"
            className="app-homepage__gif"
            alt="logo"
          ></img>
        </div>
        <div className="app-homepage__text">
          <h1>UNIQUE ARMENIA</h1>
          <span>
            You have a unique chance to discover Armenia and immerse yourself in
            the history and culture of one of the oldest civilizations in the
            world.
          </span>
          <span>
            We are introduce ''Apricot Stone'' company, which offer walking and
            historical tours, camping and climbing across whole Armenia
          </span>
        </div>
        <div className="app-homepage__images">
          <img
            src={saryan}
            width="664px"
            heigth="480px"
            className="app-img"
            alt="saryan"
          ></img>
          <img
            src={minas}
            width="664px"
            heigth="480px"
            className="app-img"
            alt="minas"
          ></img>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
