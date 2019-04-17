import React from "react";

import Logo from "../assets/images/logo.png";

export default function Header(props) {
  return (
    <header>
      <div className="header-topbar">
        <div className="container">
          <small>
            <i className="fa fa-envelope" /> contato@lufarma.com.br{" "}
            <i className="fa fa-phone ml-4" /> (77) 3422-9240
          </small>
        </div>
      </div>
      <div className="header-navbar">
        <div className="container navbar">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="navbar-menu">
            <button className="btn">Home</button>
            <button className="btn">Sobre</button>
            <button className="btn">Catálogo</button>
            <button className="btn">Contato</button>
            <button className="btn btn-primary">Faça seu pedido</button>
          </div>
        </div>
      </div>
    </header>
  );
}
