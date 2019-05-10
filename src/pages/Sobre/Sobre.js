import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import "./Sobre.scss";

const SectionBanner = props => (
  <section id="sobre-banner">
    <div className="container">
      <div
        id="sobre-banner-text"
        className="text-white"
        style={{ paddingTop: 250 }}
      >
        <h2><strong>SOBRE</strong> NÓS</h2>
      </div>
    </div>
  </section>
);

const SectionMVV = props => (
  <section id="section-mvv" className="bg-warning">
    <div className="container py-5">
      <div className="row mt-4 mb-5">
        <div className="col-12 col-md-4 mvv-card">
          <div className="mvv-title">
            <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
            <span className="font-weight-bold ml-2">MISSÃO</span>
          </div>
          <div className="mvv-text">
            A Missão da Lufarma define-se na comercialização de produtos que
            promovam saúde e bem estar dos indivíduos.
          </div>
        </div>
        <div className="col-12 col-md-4 mvv-card">
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
        <div className="col-12 col-md-4 mvv-card">
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

export default function Sobre(props) {
  return (
    <>
      <SectionBanner />
      <SectionMVV />
    </>
  );
}
