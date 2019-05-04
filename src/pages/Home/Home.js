import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faTag } from "@fortawesome/free-solid-svg-icons";

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
          <div className="col-8 mt-5">
            <h6>LUFARMA DISTRIBUIDORA FARMACÊUTICA</h6>
            <h1>
              UMA BUSCA PERMANENTE PELA <strong>EXCELÊNCIA E QUALIDADE</strong>{" "}
              DOS PRODUTOS COMERCIALIZADOS
            </h1>

            {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}

            <div className="form-row mt-5">
              <div className="col-4">
                <button className="btn btn-rounded btn-warning btn-block">
                  <FontAwesomeIcon icon={faTag} /> CATÁLOGO
                </button>
              </div>
              <div className="col-4">
                <button className="btn btn-rounded btn-light btn-block">
                  FAÇA SEU PEDIDO
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

const SectionTelesales = props => (
  <section id="section-telesales" className="bg-warning">
    <div className="container py-5 text-center">
      <h4>
        <strong>TELEVENDAS</strong>
      </h4>
      {/* <span className="d-block">Segunda à sexta: 8h às 19h</span> */}

      <div className="row">
        <div className="col-3 offset-3">
          <small>Vitória da Conquista</small>
          <h3>0800 284 5151</h3>
        </div>
        <div className="col-3">
          <small>Feira de Santana</small>
          <h3>0800 600 5152</h3>
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
      <SectionTelesales />
    </>
  );
}
