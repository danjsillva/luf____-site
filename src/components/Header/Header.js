import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

import Logo from "../../assets/images/logo.png";

export default function Header(props) {
  const [navbarStyle, setNavbarStyle] = useState("header-navbar-home");

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 72) {
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
                <FontAwesomeIcon icon={faPhone} /> (77) 3422-9240
                <FontAwesomeIcon icon={faEnvelope} className="ml-3" /> contato@lufarma.com.br
              </small>
            </div>
            <div className="col text-right">
              <small>
                <a href="" className="text-white">Acessar WebMail</a>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className={navbarStyle}>
        <div className="container navbar">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="navbar-menu">
            <button className="btn btn-sm">Home</button>
            <button className="btn btn-sm">Sobre</button>
            <button className="btn btn-sm">Catálogo</button>
            <button className="btn btn-sm">Contato</button>
            <button className="btn btn-sm btn-primary">Faça seu pedido</button>
          </div>
        </div>
      </div>
    </header>
  );
}
