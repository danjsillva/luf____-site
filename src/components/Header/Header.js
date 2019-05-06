import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

// import Logo from "../../assets/images/logo-alt.png";

export default function Header(props) {
  const [logo, setLogo] = useState(require("../../assets/images/logo-alt.png"));
  const [navbarStyle, setNavbarStyle] = useState(
    window.location.pathname === "/" ? "header-navbar-home" : "header-navbar"
  );

  useEffect(() => {
    window.onscroll = () => handleScroll();
    // window.onhashchange = () => handleHashChange();
  });

  useEffect(() => {
    if (window.location.pathname !== "/") {
      // setNavbarStyle("header-navbar");
      setLogo(require("../../assets/images/logo.png"));
    } else {
      // setNavbarStyle("header-navbar-home");
      setLogo(require("../../assets/images/logo-alt.png"));
    }
  }, []);

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop > 84 ||
      window.location.pathname !== "/"
    ) {
      setNavbarStyle("header-navbar");
      setLogo(require("../../assets/images/logo.png"));
    } else {
      setNavbarStyle("header-navbar-home");
      setLogo(require("../../assets/images/logo-alt.png"));
    }
  };

  // const handleHashChange = () => {
  //   window.scrollTo(window.scrollX, window.scrollY - 64);
  // };

  return (
    <header>
      <div className="header-topbar d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <small>
                <FontAwesomeIcon icon={faHeadset} size="lg" /> 0800 284 5151 /
                0800 600 5152
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="ml-4"
                />{" "}
                contato@lufarma.com.br
              </small>
            </div>
            <div className="col-sm-12 col-md-6 text-right d-none d-md-block">
              <small>
                <a href="/" className="text-white">
                  Acessar WebMail
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className={navbarStyle}>
        <div className="container navbar">
          <div>
            {/* <a href="/"> */}
            <img src={logo} alt="logo" />
            {/* </a> */}
          </div>
          <ul className="header-navbar-menu">
            <li className="header-navbar-item">
              <a href="/">HOME</a>
            </li>
            <li className="header-navbar-item">
              <a href="/sobre">SOBRE</a>
            </li>
            <li className="header-navbar-item">
              <a href="/catalogo">CATÁLOGO</a>
            </li>
            <li className="header-navbar-item">
              <a href="/contato">CONTATO</a>
            </li>
            <li className="header-navbar-item">
              <button className="btn btn-rounded btn-sm btn-warning px-3">
                Faça seu pedido
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
