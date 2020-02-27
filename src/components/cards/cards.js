import React, { Component } from "react";
import "./cards.scss";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          src: require("../../assets/images/card-play-harder.png"),
          title: "PLAY HARDER",
          cont:
            "Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut."
        },
        {
          id: 2,
          src2: require("../../assets/images/card-simplicity.png"),

          title: "SIMPLICITY",
          cont:
            "Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna."
        },
        {
          id: 3,
          src: require("../../assets/images/card-innovation.png"),

          title: "INNOVATION",
          cont:
            "Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus."
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="cards">
        {this.state.cards.map((item, key) => (
          <div className="card">
            <div className="cardTitle">
              {item.src != null ? (
                <img src={item.src} alt="" className="cardImg" />
              ) : (
                <img src={item.src2} alt="" className="cardImg2" />
              )}
            </div>
            <div className="cardCont">
              <h1 className="cardContText">{item.cont}</h1>
            </div>
            <div className="cardFooter">READ MORE</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
