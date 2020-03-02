import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./tabs.scss";
import spinner from "../../assets/images/loader.png";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchArray: [],
      tabContent: []
    };
  }

  async fetchData() {
    var array = [];
    for (let i = 1; i <= 3; i++) {
      await axios.get(`tab${i}.json`).then(response => {
        response.data.item["id"] = i;

        if (response.data.item["id"] === 1) {
          response.data.item["active"] = true;
        } else {
          response.data.item["active"] = false;
        }

        array.push(response.data);
      });
    }

    this.setState({
      fetchArray: array,
      tabContent: array[0].item.content
    });
  }

  selectTab(id) {
    this.setState({
      tabContent: ""
    });
    var selectedItemContent;
    this.state.fetchArray.forEach(el => {
      if (el.item.id === id) {
        el.item.active = true;
        selectedItemContent = el.item.content;
      } else {
        el.item.active = false;
      }
    });
    setTimeout(() => {
      this.setState({
        tabContent: selectedItemContent
      });
    }, 800);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="tabsBox">
        <div className="tabsNav">
          {this.state.fetchArray.map((tabEl, key) => (
            <React.Fragment key={key}>
              <div
                className={
                  tabEl.item.active ? "tabsNavItemActive" : "tabsNavItem"
                }
                onClick={() => {
                  this.selectTab(tabEl.item.id);
                }}
              >
                {tabEl.item.title}
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className={
                    tabEl.item.active ? "tabNavIconActive" : "tabNavIcon"
                  }
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="tabsCont">
          {this.state.tabContent !== "" ? (
            <div className="tabsContItem">{this.state.tabContent}</div>
          ) : (
            <img src={spinner} alt="" className="tabSpinner" />
          )}
        </div>
      </div>
    );
  }
}

export default Tabs;
