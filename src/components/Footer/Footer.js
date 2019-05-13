import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faSkype
} from "@fortawesome/fontawesome-free-brands";

import "./Footer.scss";

const SectionServices = props => (
  <section className="bg-warning">
    <div className="container py-5 text-center">
      <h4>
        <strong>REIMPRESSÃO</strong> DE BOLETOS
      </h4>
      <Link to="servicos" className="btn btn-rounded btn-sm btn-primary px-3">
        Boletos e Serviços
      </Link>
    </div>
  </section>
);

const SectionOrder = props => (
  <section id="section-order" className="bg-primary">
    <div className="container py-5 text-center text-white">
      {/* <div className="row">
        <div className="col-6"> */}
      <h4>
        <strong>FAÇA SEU PEDIDO</strong> ONLINE
      </h4>
      <button
        className="btn btn-rounded btn-sm btn-warning px-3"
        onClick={() =>
          window.open("http://lufarma.resultwebvendas.com.br/#/login")
        }
      >
        Faça seu pedido
      </button>
      {/* </div> */}
      {/* <div className="col-6">
          <h4>
            <strong>REIMPRESSÃO</strong> DE BOLETOS
          </h4>
          <Link
            to="servicos"
            className="btn btn-rounded btn-sm btn-warning px-3"
          >
            Boletos e Serviços
          </Link>
        </div> */}
      {/* </div> */}
    </div>
  </section>
);

const SectionPartners = props => (
  <section id="section-partners" className="">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/ems.png")}
            alt="ems"
          />
        </div>
        <div className="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/globo.png")}
            alt="globo"
          />
        </div>
        <div className="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/medley.png")}
            alt="medley"
          />
        </div>
        <div className="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/mult.png")}
            alt="mult"
          />
        </div>
        <div className="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/natulab.png")}
            alt="natulab"
          />
        </div>
        <div className="col-md-2 col-4">
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

export default function Footer(props) {
  return (
    <>
      <SectionServices />
      <SectionPartners />
      <SectionOrder />
      <footer>
        <div className="bg-secondary text-white">
          <div className="container py-5">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <h5 className="text-warning">
                  <strong>LUFARMA</strong> DISTRIBUIDORA FARMAC LTDA
                </h5>
                <span className="d-block">RUA U, 1175 - Felícia</span>
                <span className="d-block">Vitória da Conquista - BA</span>
                <span className="d-block mb-3">45.055-555</span>
                <span className="d-block">(77) 3422-9240</span>
                <span className="d-block">contato@lufarma.com.br</span>
                <span className="d-block mb-4">www.lufarma.com.br</span>

                <Link
                  to="/sobre"
                  className="btn btn-rounded btn-primary btn-sm px-3 mb-5"
                >
                  Trabalhe conosco
                </Link>
              </div>

              <div className="col-sm-12 col-md-4">
                <h5 className="text-warning">
                  <strong>TELEVENDAS</strong>
                </h5>
                <small>Vitória da Conquista</small>
                <h3>0800 284 5151</h3>
                <small>Feira de Santana</small>
                <h3 className="mb-5">0800 600 5152</h3>

                <h5 className="text-warning">
                  <strong>ATENDIMENTO</strong>
                </h5>
                <span className="d-block mb-5">Segunda à sexta: 8h às 19h</span>
              </div>

              <div className="col-sm-12 col-md-4">
                <h5 className="text-warning">
                  <strong>SOCIAL</strong> E CONTATO
                </h5>
                <a
                  className="text-white"
                  href="https://www.facebook.com/LufarmaDistribuidoraFarmaceutica/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a
                  className="text-white ml-3"
                  href="https://www.instagram.com/lufarmadistribuidora/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
                <a
                  className="text-white ml-3"
                  href="https://wa.me/557599601703"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </a>
                <a className="text-white ml-3" href="/" target="blank">
                  <FontAwesomeIcon icon={faSkype} size="3x" />
                </a>
                <a className="text-white ml-3" href="/" target="blank">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </a>

                <h5 className="text-warning mt-5">
                  <strong>LINKS</strong> ÚTEIS
                </h5>
                <a
                  className="text-white d-block"
                  href="http://portal.anvisa.gov.br/"
                  target="blank"
                >
                  Anvisa
                </a>
                <a
                  className="text-white d-block"
                  href="http://www.nfe.fazenda.gov.br/portal/principal.aspx"
                  target="blank"
                >
                  Sefaz
                </a>
                <a
                  className="text-white d-block"
                  href="https://www.receita.fazenda.gov.br/"
                  target="blank"
                >
                  Receita Federal
                </a>
                <a
                  className="text-white d-block"
                  href="http://www.sintegra.gov.br/"
                  target="blank"
                >
                  Sintegra
                </a>
                <a
                  className="text-white d-block"
                  href="http://portal.anvisa.gov.br/vigilancia-sanitaria-no-brasil"
                  target="blank"
                >
                  Vigilância Sanitária
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-warning text-dark">
          <div className="container py-2">
            <small>
              Developed with <FontAwesomeIcon icon={faHeart} /> by{" "}
              <a
                className="text-dark"
                href="http://instagram.com/danjsillva"
                target="blank"
              >
                Daniel Silva
              </a>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}
