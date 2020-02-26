import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main/main";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { translate } from "react-i18next";
import { Spinner } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      splashScreen: true,
      hideSplash: false
    };
  }
  componentDidMount() {
    this.splash();
  }
  splash() {
    setTimeout(() => {
      this.setState({ splashScreen: false });
    }, 2500);
    setTimeout(() => {
      this.setState({ hideSplash: true });
    }, 3500);
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="contenitore">
            <div className="main" onClick={this.hideNav}>
              {!this.state.hideSplash ? (
                <div
                  className={`splashScreen  ${this.state.splashScreen ===
                    false && "fade-out-splash"}`}
                >
                  <Spinner color="primary" className="splashSpinner" />
                </div>
              ) : null}
              <Route exact path="/" component={Main} />
            </div>
          </div>
        </Router>
      </I18nextProvider>
    );
  }
}

export default translate("common")(App);
