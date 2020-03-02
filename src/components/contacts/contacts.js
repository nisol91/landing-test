import React, { Component } from "react";
import "./contacts.scss";
import { translate } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
      message: "",
      showSubmitToast: false
    };
  }

  nameHandler = event => {
    var arrLenght = Array.from(event.target.value).length;
    if (arrLenght < 4) {
      this.setState({
        nameError: "This field must be at least 4 characters long!"
      });
    } else {
      this.setState({
        nameError: null
      });
    }
    if (arrLenght === 0) {
      this.setState({
        nameError: null
      });
    }
    //===
    this.setState({
      name: event.target.value
    });
  };
  lastNameHandler = event => {
    var arrLenght = Array.from(event.target.value).length;
    if (arrLenght < 4) {
      this.setState({
        lastNameError: "This field must be at least 4 characters long!"
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
    //===
    this.setState({
      lastName: event.target.value
    });
  };
  emailHandler = event => {
    var arrLenght = Array.from(event.target.value).length;
    if (
      arrLenght < 5 ||
      !event.target.value
        .toLowerCase()
        .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      this.setState({
        emailError: "Invalid email"
      });
    } else {
      this.setState({
        emailError: null
      });
    }
    if (arrLenght === 0) {
      this.setState({
        emailError: null
      });
    }
    this.setState({
      email: event.target.value
    });
  };
  messageHandler = event => {
    var arrLenght = Array.from(event.target.value).length;
    if (arrLenght < 21) {
      this.setState({
        messageError: "This field must be at least 4 characters long!"
      });
    } else {
      this.setState({
        messageError: null
      });
    }
    if (arrLenght === 0) {
      this.setState({
        messageError: null
      });
    }
    this.setState({
      message: event.target.value
    });
  };

  handleSubmit = event => {
    if (this.state.messageError === null && this.state.emailError === null) {
      this.setState({
        showSubmitToast: true
      });
      setTimeout(() => {
        this.setState({ showSubmitToast: false });
      }, 2500);
    } else {
      this.setState({
        messageError: "Required",
        emailError: "Required"
      });
    }

    event.preventDefault();
  };

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
        <form className="contactsForm" onSubmit={this.handleSubmit}>
          <div className="nameLastName">
            <div className="formInputBoxName">
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
            <div className="formInputBoxName">
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
          <div className="formInputBoxMail">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.emailHandler}
              className="formEmail"
              placeholder="email"
            />
            {this.state.emailError ? (
              <div className="error">{this.state.emailError}</div>
            ) : (
              <div className="error"></div>
            )}
          </div>
          <div className="formInputBoxMessage">
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
          <div className="submitBtnRow">
            <div className="submitBtn">
              <input type="submit" value="SEND" className="submitBtnInput" />
              <FontAwesomeIcon icon={faChevronRight} className="iconSubmit" />
            </div>
          </div>
        </form>
        {this.state.showSubmitToast ? (
          <div className="submitToast fade-in">Message successfully sent!</div>
        ) : null}
      </div>
    );
  }
}
// export default Contact;
export default translate()(Contacts);
