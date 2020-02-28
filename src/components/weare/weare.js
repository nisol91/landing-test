import React, { Component } from "react";
import "./weare.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class WeAre extends Component {
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
            src={require("../../assets/images/banner-we-are.jpg")}
            alt=""
            className="weImg"
          />
        </div>
        <div className="textBox">
          <h1 className="banner1">we</h1>
          <h1 className="banner1">are.</h1>
          <h1 className="banner2">
            Consectetur adipiscing elit. Nulla condimentum tortor sem.
          </h1>
          <div className="btnBanners">
            THE PLAYERS{" "}
            <FontAwesomeIcon icon={faChevronRight} className="arrowR" />
          </div>
        </div>
      </div>
    );
  }
}

export default WeAre;
