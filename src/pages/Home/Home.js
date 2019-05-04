import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";

import "./Home.scss";

const SectionBanner = props => (
  <section id="home-banner">
    <div className="container">
      <div
        id="home-banner-text"
        className="text-white float-left"
        style={{ marginTop: "30vh" }}
      >
        <div className="row mt-5">
          <div className="col-8">
            <h6>
              LUFARMA DISTRIBUIDORA FARMACÊUTICA
            </h6>
            <h1>
              UMA BUSCA PERMANENTE PELA <strong>EXCELÊNCIA E QUALIDADE</strong>{" "}
              DOS PRODUTOS COMERCIALIZADOS
            </h1>

            {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}

            <div className="form-row mt-5">
              <div className="col-4">
                <button className="btn btn-warning btn-block btn-rounde">
                  SOBRE
                </button>
              </div>
              <div className="col-4">
                <button className="btn btn-light btn-block btn-rounde">
                  CONTATO
                </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h5 className="text-warning">
              {/* <strong>LUFARMA</strong> DISTRIBUIDORA FARMAC LTDA */}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PageDownLink = props => (
  <div
    className="text-center w-100"
    style={{ marginTop: "-48px", position: "absolute" }}
  >
    <a href="#section-mvv" className="text-warning">
      <FontAwesomeIcon icon={faChevronCircleDown} size="2x" />
    </a>
  </div>
);

const SectionOrder = props => (
  <section id="section-order" className="bg-warning">
    <div className="container py-5 text-center">
      <h4>
        <strong>FAÇA SEU PEDIDO</strong> ONLINE
      </h4>
      <button className="btn btn-sm btn-primary px-3">Faça seu pedido</button>
    </div>
  </section>
);

const SectionPartners = props => (
  <section id="section-partners" className="">
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
      <SectionBanner />
      <PageDownLink />
      <SectionOrder />
      <SectionPartners />
    </>
  );
}
