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
        className="text-primar text-right float-right w-50"
        style={{ marginTop: "50vh" }}
      >
        <h2>
          UMA BUSCA PERMANENTE PELA <strong>EXCELÊNCIA E QUALIDADE</strong> DOS
          PRODUTOS COMERCIALIZADOS
        </h2>
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

const SectionMVV = props => (
  <section id="section-mvv" className="bg-warnin">
    <div className="container py-5">
      <div className="row mt-4 mb-5">
        <div class="col-4 mvv-card">
          <div className="mvv-title">
            <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
            <span className="font-weight-bold ml-2">MISSÃO</span>
          </div>
          <div className="mvv-text">
            A Missão da Lufarma define-se na comercialização de produtos que
            promovam saúde e bem estar dos indivíduos.
          </div>
        </div>
        <div class="col-4 mvv-card">
          <div className="mvv-title">
            <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
            <span className="font-weight-bold ml-2">VISÃO</span>
          </div>
          <div className="mvv-text">
            Buscar permanentemente um grau de excelência no conhecimento e na
            qualidade dos produtos comercializados, compartilhando experiências
            para o beneficio dos seus clientes.
          </div>
        </div>
        <div class="col-4 mvv-card">
          <div className="mvv-title">
            <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
            <span className="font-weight-bold ml-2">VALORES</span>
          </div>
          <div className="mvv-text">
            Cliente como razão da existência da organização. Relacionamento
            ético e transparente com clientes e investidores.
          </div>
        </div>
      </div>
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
      <SectionMVV />
      <SectionOrder />
      <SectionPartners />
    </>
  );
}
