import React, { Component } from 'react';

import "./Homepage.scss";

import apricotStone from "assets/apricotStone.gif";
import saryan from "assets/saryan.jpg";
import minas from "assets/minas.jpg";

export class Homepage extends Component {

    render() {
        return (
            <div className = "app-homepage">
                <img src ={apricotStone}></img>
                <span>All about Armenia</span>
                <img src = {saryan} className = "app-img"></img>
                <img src = {minas} className = "app-img"></img>
            </div>
        )
    }
}

export default Homepage;
