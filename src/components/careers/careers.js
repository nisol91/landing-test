import React, { Component } from "react";

import "./careers.scss";

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="weare">
        <div className="weImgBox">
          <img
            src={require("../../assets/images/banner-carrers.jpg")}
            alt=""
            className="weImg"
          />
        </div>
        <div className="textBox">
          <h1 className="banner1">careers.</h1>
          <h1 className="banner2">
            Consectetur adipiscing elit. Nulla condimentum tortor sem.
          </h1>
          <div className="btnBanners">THE POSITIONS ></div>
        </div>
      </div>
    );
  }
}

export default Careers;
