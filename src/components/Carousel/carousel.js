import React, { Component } from "react";
import "./carousel.scss";
import { translate } from "react-i18next";
import Carousel from "nuka-carousel";
import styled from "@emotion/styled";

class MyCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: this.props.data
    };
  }

  componentDidMount() {}
  render() {
    const CarouselStyled = styled(Carousel)`
      margin: 0 auto;
      .slider-control-bottomcenter {
        .paging-item {
          .paging-dot {
            background: grey !important;
            height: 10px !important;
            width: 10px !important;
            border-radius: 100%;
            circle {
              display: none;
            }
          }
          &.active .paging-dot {
            background: white !important;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          button {
            opacity: 1 !important;
          }
        }
      }
      .slider-control-centerright {
        button {
          visibility: hidden;
        }
        button:after {
          visibility: visible;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          content: "";
          background: url(https://cdn3.iconfinder.com/data/icons/arrows-149/512/directional-chevron-right-512.png);
          background-size: cover;
          height: 50px !important;
          width: 50px !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .slider-control-centerleft {
        button {
          visibility: hidden;
        }
        button:after {
          visibility: visible;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          content: "";
          background: url(https://cdn3.iconfinder.com/data/icons/arrows-149/512/directional-chevron-back-512.png);
          background-size: cover;
          height: 50px !important;
          width: 50px !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    `;
    return (
      <div className="carouselContainer">
        <CarouselStyled
          slidesToShow={1}
          dragging={true}
          swiping={true}
          wrapAround={true}
          autoplay={true}
          autoplayInterval={2000}
        >
          {this.state.imgList.map((img, index) => (
            <React.Fragment key={index}>
              <div key={index} className="carouselElement">
                <img className="carouselImg" src={img.src} alt="" />
              </div>
            </React.Fragment>
          ))}
        </CarouselStyled>
      </div>
    );
  }
}
// export default Contact;
export default translate()(MyCarousel);
