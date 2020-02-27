import React, { Component } from "react";
import "./footer.scss";
import { translate } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faFacebookF,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo-playground-white.png";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  render() {
    const { t } = this.props;

    return (
      <div className="footer">
        <div className="navFooterContainer">
          <img src={logo} alt="" />
        </div>

        <div className="navFooterContainer">
          <div className="navFItem">we are</div>
          <div className="navFItem">we do</div>
          <div className="navFItem">careers</div>
          <div className="navFItem">contact us</div>
        </div>
        <div className="iconsContainer">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="socialIcon" />
            <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
            <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
          </a>
        </div>
        <div className="iconsContainer">
          <h5 className="footerText">App made with</h5>
          <FontAwesomeIcon icon={faReact} className="reactIcon" />
        </div>
        <div className="iconsContainer">
          <h5 className="footerText">Brewed by</h5>
          <a
            className="nsLink"
            href="https://nszdeveloper.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nszdev
          </a>
        </div>
      </div>
    );
  }
}
// export default Contact;
export default translate()(Footer);
