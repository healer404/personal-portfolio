import React, {Component} from "react";
import {GitHub, LinkedIn} from "@material-ui/icons";
import './Header.css';

class Header extends Component{
  render () {
    return (
      <>
        <div className="header-background-container">
          <div className="first-triangle"></div>
          <div className="second-triangle"></div>
          <div className="third-triangle"></div>

          <section className="container header-container">
            <div className="header-wrapper">
              {/* social links  */}
              <div className="header-social-icons">
                <GitHub className="header-social-icon" />
                <LinkedIn className="header-social-icon" />
                <p className="header-social-line"></p>
              </div>

              {/* header texts opening */}
              <div className="header-opening center">
                <h3 className="header-opening-greetings">
                  Hello, My Name is
                </h3>
                <h1 className="header-opening-banner">
                  Roniel Duka
                </h1>
                <p className="header-opening-description">
                  Junior Front-end Developer / Data Encoder
                </p>

                <div className="header-button-group">
                  <button className="btn btn-secondary">
                    Download CV
                  </button>
                  <button className="btn btn-primary">
                    Let's Talk
                  </button>
                </div>
              </div>

              {/* just empty space */}
              <div className="header-empty">
                &nbsp;
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
export default Header;