import React, { Component } from "react";

import "./tabs.scss";
import json1 from "../../assets/ajax/tab1";
import json2 from "../../assets/ajax/tab2";
import json3 from "../../assets/ajax/tab3";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: json1,
      tab2: json2,
      tab3: json3
    };
  }

  fetchData() {
    var fetchedTitle = json1.item.title;
    var fetchedSubTitle = json1.item.content;
    console.log("====================================");
    console.log(fetchedTitle);
    console.log(fetchedSubTitle);
    console.log(json1);

    console.log("====================================");
    this.setState({
      title1: fetchedTitle,
      subTitle1: fetchedSubTitle
    });
  }

  componentDidMount() {
    console.log("====================================");
    console.log(this.state.tab1);
    console.log("====================================");
  }

  render() {
    return (
      <div className="tabsBox">
        <div className="tabsNav"></div>
        <div className="tabsCont"></div>
      </div>
    );
  }
}

export default Tabs;
