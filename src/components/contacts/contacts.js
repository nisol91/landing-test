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
      nameError: null,
      lastName: "",
      lastNameError: "",
      email: "",
      emailError: "",
      messageError: "",
      message: ""
    };
  }

  nameHandler = event => {
    var arrLenght = Array.from(event.target.value).length;
    if (arrLenght < 4) {
      this.setState({
        nameError: "This field must contain at least 4 letters"
      });
    } else {
      this.setState({
        nameError: null
      });
    }
    this.setState({
      name: event.target.value
    });
    console.log(this.state.name);
  };
  lastNameHandler = event => {
    var arrLenght = Array.from(event.target.value).length;
    if (arrLenght < 4) {
      this.setState({
        lastNameError: "This field must contain at least 4 letters"
      });
    } else {
      this.setState({
        lastNameError: null
      });
    }
    if (arrLenght === 0) {
      this.setState({
        lastNameError: null
      });
    }
    this.setState({
      lastName: event.target.value
    });
    console.log(this.state.lastName);
  };
  emailHandler = event => {
    this.setState({
      email: event.target.value
    });
    console.log(this.state.email);
  };
  messageHandler = event => {
    this.setState({
      message: event.target.value
    });
    console.log(this.state.message);
  };

  onDismiss() {}
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
        <form className="contactsForm">
          <div className="nameLastName">
            <div className="formInputBox1">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.nameHandler}
                placeholder="name"
                className="formName"
              />
              {this.state.nameError ? (
                <div className="error">{this.state.nameError}</div>
              ) : (
                <div className="error"></div>
              )}
            </div>
            <div className="formInputBox1">
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.lastNameHandler}
                className="formName"
                placeholder="last name"
              />
              {this.state.lastNameError ? (
                <div className="error">{this.state.lastNameError}</div>
              ) : (
                <div className="error"></div>
              )}
            </div>
          </div>
          <div className="formInputBox2">
            <textarea
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.messageHandler}
              className="formMessage"
              placeholder="message"
            />
            {this.state.messageError ? (
              <div className="error">{this.state.messageError}</div>
            ) : (
              <div className="error"></div>
            )}
          </div>
          <div className="formInputBox3">
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.emailHandler}
              className="formEmail"
              placeholder="email"
            />
          </div>
        </form>
      </div>
    );
  }
}
// export default Contact;
export default translate()(Contacts);
