import React, { Component } from "react";
import axios from "axios";
import "./contacts.scss";
import { translate } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faFacebookF,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo-playground-white.png";

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
      formVisibility: true,
      visible: false,
      formShowEnter: true,
      mapVisibility: true
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          name: "",
          email: "",
          message: "",
          formVisibility: false,
          mapVisibility: false
        });

        this.onDismiss = this.onDismiss.bind(this);
      })
      .catch(error => this.setState({ error: error.message }));

    setTimeout(() => {
      this.setState({
        mailSent: true,
        formVisibility: true,
        visible: true,
        mapVisibility: true
      });
    }, 1000);
  };
  onDismiss() {
    this.setState({ visible: false });
  }
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <div className="contacts">
        <div className="contactsSx">
          <div className="ctitle">contact</div>
          <div className="ctitle">us.</div>
          <div className="ccontent">Playground srl</div>
          <div className="ccontent">Via G. Mazzini 3/C,</div>
          <div className="ccontent">Cernusco Sul Naviglio (Milano)</div>
          <div className="ccontent">-</div>
          <div className="ccontent">T +39 0240706003</div>
        </div>
        <div className="contactsForm"></div>
      </div>
    );
  }
}
// export default Contact;
export default translate()(Contacts);
