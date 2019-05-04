import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

import Logo from "../../assets/images/logo.png";

export default function Header(props) {
  const [navbarStyle, setNavbarStyle] = useState(
    window.location.pathname == "/" ? "header-navbar-home" : "header-navbar"
  );

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop > 72 ||
      window.location.pathname != "/"
    ) {
      setNavbarStyle("header-navbar");
    } else {
      setNavbarStyle("header-navbar-home");
    }
  };

  useEffect(() => {
    window.onscroll = () => handleScroll();
  });

  return (
    <header>
      <div className="header-topbar">
        <div className="container">
          <div className="row">
            <div className="col">
              <small>
                <FontAwesomeIcon icon={faHeadset} size="lg" /> 0800 284 5151 / 0800 600 5152
                <FontAwesomeIcon icon={faEnvelope} size="lg" className="ml-4" />{" "}
                contato@lufarma.com.br
              </small>
            </div>
            <div className="col text-right">
              <small>
                <a href="" className="text-white">
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
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
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
              <button className="btn btn-rounded btn-sm btn-primary px-3">
                Faça seu pedido
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
