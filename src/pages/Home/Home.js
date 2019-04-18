import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

import "./Home.scss";

const PageDownLink = props => (
  <div
    className="text-center w-100"
    style={{ marginTop: "-48px", position: "absolute" }}
  >
    <a href="#section1" className="text-warning">
      <FontAwesomeIcon icon={faChevronCircleDown} size="2x" />
    </a>
  </div>
);

const SectionPartiners = props => (
  <section className="">
    <div className="container py-5">
      <div class="row">
        <div class="col-2">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/ems.png")}
            alt="ems"
          />
        </div>
        <div class="col-2">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/globo.png")}
            alt="globo"
          />
        </div>
        <div class="col-2">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/medley.png")}
            alt="medley"
          />
        </div>
        <div class="col-2">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/mult.png")}
            alt="mult"
          />
        </div>
        <div class="col-2">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/natulab.png")}
            alt="natulab"
          />
        </div>
        <div class="col-2">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/neo.png")}
            alt="neo"
          />
        </div>
      </div>
    </div>
  </section>
);

export default function Home(props) {
  return (
    <>
      <section id="home-banner">
        <div className="container">
          <div
            id="home-banner-text"
            className="text-primar text-right float-right w-50"
            style={{ marginTop: "50vh" }}
          >
            <h2>
              UMA BUSCA PERMANENTE PELA <strong className="text-warnin">EXCELÊNCIA E QUALIDADE</strong> DOS PRODUTOS COMERCIALIZADOS
            </h2>
          </div>
        </div>
      </section>

      <PageDownLink />

      <section className="bg-warning">
        <div className="container py-5">asd</div>
      </section>

      <section id="section1" className="">
        <div className="container py-5">asd</div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <SectionPartiners />
    </>
  );
}
