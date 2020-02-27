import React, { Component } from "react";
import { translate } from "react-i18next";
import "./main.scss";
import Footer from "../footer/footer";
import MyCarousel from "../Carousel/carousel";
import Cards from "../cards/cards";
import Tabs from "../tabs/tabs";
import WeAre from "../weare/weare";
import WeDo from "../wedo/wedo";
import Careers from "../careers/careers";
import Contacts from "../contacts/contacts";

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
      toggleNav: false,
      hideNavbar: true,
      navItems: [
        { id: 1, name: "we are", ref: "weare", offset: 0 },
        { id: 2, name: "we do", ref: "wedo", offset: 0 },
        { id: 3, name: "careers", ref: "careers", offset: 0 },
        { id: 4, name: "contact us", ref: "contacts", offset: 0 }
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
            <h1 className="home1">lorem</h1>
            <h1 className="home1">ipsum.</h1>

            <h1 className="home2">
              Consectetur adipiscing elit. Nulla condimentum tortor sem, in
              semper nisl bibendum eu.
            </h1>

            <ScrollLink to={""} className="" onClick={() => {}}></ScrollLink>
          </div>
        </div>

        {/* ============= */}

        {/* ======all other components======= */}

        <Cards></Cards>

        <div>
          <ScrollTrigger
            className="scrollTrigger"
            onEnter={this.onEnterViewportContacts}
            onExit={this.onExitViewportContacts}
          ></ScrollTrigger>
          <Element name="weare" className="">
            <WeAre></WeAre>
          </Element>
        </div>
        <div>
          <ScrollTrigger
            className="scrollTrigger"
            onEnter={this.onEnterViewportContacts}
            onExit={this.onExitViewportContacts}
          ></ScrollTrigger>
          <Element name="wedo" className="">
            <WeDo></WeDo>
          </Element>
        </div>
        <div>
          <ScrollTrigger
            className="scrollTrigger"
            onEnter={this.onEnterViewportContacts}
            onExit={this.onExitViewportContacts}
          ></ScrollTrigger>
          <Element name="careers" className="">
            <Careers></Careers>
          </Element>
        </div>

        <Tabs></Tabs>

        <div>
          <ScrollTrigger
            className="scrollTrigger"
            onEnter={this.onEnterViewportContacts}
            onExit={this.onExitViewportContacts}
          ></ScrollTrigger>
          <Element name="contacts" className="">
            <Contacts></Contacts>
          </Element>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default translate()(Main);
