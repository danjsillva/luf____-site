import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faLink } from "@fortawesome/free-solid-svg-icons";

import "./Servicos.scss";

const SectionBanner = props => (
  <section id="sobre-banner">
    <div className="container">
      <div
        id="sobre-banner-text"
        className="text-white"
        style={{ paddingTop: 250 }}
      >
        <h2>
          <strong>BOLETOS</strong> E SERVIÇOS
        </h2>
      </div>
    </div>
  </section>
);

const SectionBanks = props => (
  <section id="servicos-banks">
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h3>
            Reimpressão de Boletos
            <FontAwesomeIcon icon={faBarcode} className="float-right" />
          </h3>
          <hr />
          <a
            className="mt-3 d-block"
            href="https://www63.bb.com.br/portalbb/boleto/boletos/hc21e,802,3322,10343.bbx"
            target="blank"
          >
            Banco do Brasil
          </a>
          <a
            className="mt-3 d-block"
            href="https://www.itau.com.br/servicos/boletos/atualizar"
            target="blank"
          >
            Itaú Unibanco
          </a>
          <a
            className="my-3 d-block"
            href="https://nel.bnb.gov.br/sgrweb/sgrfrssegundavia.aspx"
            target="blank"
          >
            Banco do Nordeste
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <h3>
            Links úteis
            <FontAwesomeIcon icon={faLink} className="float-right" />
          </h3>
          <hr />
          <a
            className="mt-3 d-block"
            href="http://portal.anvisa.gov.br/"
            target="blank"
          >
            Anvisa
          </a>
          <a
            className="mt-3 d-block"
            href="http://www.nfe.fazenda.gov.br/portal/principal.aspx"
            target="blank"
          >
            Sefaz
          </a>
          <a
            className="mt-3 d-block"
            href="https://www.receita.fazenda.gov.br/"
            target="blank"
          >
            Receita Federal
          </a>
          <a
            className="mt-3 d-block"
            href="http://www.sintegra.gov.br/"
            target="blank"
          >
            Sintegra
          </a>
          <a
            className="my-3 d-block"
            href="http://portal.anvisa.gov.br/vigilancia-sanitaria-no-brasil"
            target="blank"
          >
            Vigilância Sanitária
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function Servicos(props) {
  return (
    <>
      <SectionBanner />
      <SectionBanks />
    </>
  );
}
