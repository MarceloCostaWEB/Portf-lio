import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import img from "../Data/images/WhatsApp Image 2023-03-28 at 11.44.09.jpeg"

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={img}
            className="nav-logo"
            alt="foto perfil"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Projetos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projetos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Contatos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
