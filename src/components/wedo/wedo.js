import React, { Component } from "react";
import "./wedo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class WeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="wedo">
        <div className="textBoxWeDo">
          <h1 className="banner1">we</h1>
          <h1 className="banner1">do.</h1>
          <h1 className="banner2">
            Consectetur adipiscing elit. Nulla condimentum tortor sem.
          </h1>
          <div className="btnBanners">
            THE PROJECTS{" "}
            <FontAwesomeIcon icon={faChevronRight} className="arrowR" />
          </div>
        </div>
        <div className="weImgBoxWeDo">
          <img
            src={require("../../assets/images/banner-we-do.jpg")}
            alt=""
            className="weImg weImg2"
          />
        </div>
      </div>
    );
  }
}

export default WeDo;
