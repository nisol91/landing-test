import React, { Component } from "react";
import { translate } from "react-i18next";
import "./main.scss";
import Footer from "../footer/footer";
import MyCarousel from "../Carousel/carousel";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import ScrollTrigger from "react-scroll-trigger";
import HamburgerMenu from "react-hamburger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo-playground-white.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: true,
      scrollProjects: false,
      scrollContacts: false,
      toggleNav: false,
      hideNavbar: true,
      navItems: [
        { id: 1, name: "we are", ref: "home", offset: 0 },
        { id: 2, name: "we do", ref: "about", offset: -80 },
        { id: 3, name: "careers", ref: "careers", offset: -80 },
        { id: 4, name: "contact us", ref: "contacts", offset: -80 }
      ],
      imagesList: [
        { src: require("../../assets/images/slide-circle.jpg") },
        { src: require("../../assets/images/slide-hello.jpg") },
        { src: require("../../assets/images/slide-play.jpg") }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
    scrollSpy.update();
  }

  //==================gestione dello scroll

  scrollTo(element, offset) {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 10,
      smooth: "easeInOutQuart",
      offset: offset
    });
  }

  handleScroll = () => {
    if (window.scrollY > "50") {
      this.setState({ toggleNav: true });
    }
    if (window.scrollY < "100") {
      this.setState({ toggleNav: false });
    }
  };

  showNavbar = () => {
    this.setState({ hideNavbar: !this.state.hideNavbar });
  };

  //RENDER DEL COMPONENTE=======

  render() {
    return (
      <div className="boxMainContent">
        <div
          className={`showNavBtn ${!this.state.hideNavbar && ""} `}
          onClick={this.showNavbar}
        >
          <HamburgerMenu
            isOpen={!this.state.hideNavbar}
            menuClicked={this.showNavbar}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>

        {/* NAVBAR======== */}
        <div
          className={`navbar fixedMobileNav  ${this.state.toggleNav &&
            "coloredNav slide-in-top"} ${this.state.hideNavbar &&
            "slide-out-top hide"} `}
        >
          <div className="leftNavbar">
            <div className="secondRow">
              <img
                className={`logoNav  ${this.state.toggleNav &&
                  "logoNavSmall"} `}
                src={logo}
                alt=""
              />
            </div>
          </div>
          <div className="rightNavbar">
            <div
              className={`showNavBtn ${this.state.hideNavbar && "hide"} `}
              onClick={this.showNavbar}
            ></div>
            {this.state.navItems.map((item, key) => (
              <div className="navItem " key={item.id}>
                <ScrollLink
                  to={""}
                  className={`navItemStyle lineThroughNav`}
                  onClick={() => {
                    this.setState({
                      scrollContacts: true,
                      scrollProjects: true
                    });
                    setTimeout(() => {
                      this.scrollTo(item.ref, item.offset);
                    }, 300);
                  }}
                >
                  {item.name}
                </ScrollLink>
              </div>
            ))}
          </div>
        </div>
        {/* ============= */}

        {/* header */}

        <ScrollTrigger
          className="scrollTrigger"
          onEnter={this.onEnterViewportHome}
          onExit={this.onExitViewportHome}
        ></ScrollTrigger>
        <Element name="home"></Element>

        <div className="boxHome">
          <MyCarousel data={this.state.imagesList}></MyCarousel>
          <div className="textHomeBox">
            <h1 className="home1">TITOLO</h1>
            <ScrollLink to={""} className="" onClick={() => {}}>
              <div className="myBtnContact">Sottotitolo</div>
            </ScrollLink>
          </div>
        </div>

        {/* ============= */}

        {this.state.scrollContacts ? (
          <div>
            <ScrollTrigger
              className="scrollTrigger"
              onEnter={this.onEnterViewportContacts}
              onExit={this.onExitViewportContacts}
            ></ScrollTrigger>
            <Element name="contacts" className="contactPlaceholder">
              {this.state.contactsVisible ? <h1>contact us</h1> : null}
            </Element>
          </div>
        ) : null}
        <Footer></Footer>
      </div>
    );
  }
}

export default translate()(Main);
