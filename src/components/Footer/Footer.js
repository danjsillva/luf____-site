import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faSkype
} from "@fortawesome/fontawesome-free-brands";

import "./Footer.scss";

const SectionOrder = props => (
  <section id="section-order" className="bg-primary">
    <div className="container py-5 text-center text-white">
      <h4>
        <strong>FAÇA SEU PEDIDO</strong> ONLINE
      </h4>
      <button className="btn btn-rounded btn-sm btn-warning px-3">
        Faça seu pedido
      </button>
    </div>
  </section>
);

const SectionPartners = props => (
  <section id="section-partners" className="">
    <div className="container py-5">
      <div class="row">
        <div class="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/ems.png")}
            alt="ems"
          />
        </div>
        <div class="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/globo.png")}
            alt="globo"
          />
        </div>
        <div class="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/medley.png")}
            alt="medley"
          />
        </div>
        <div class="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/mult.png")}
            alt="mult"
          />
        </div>
        <div class="col-md-2 col-4">
          <img
            className="partner-image"
            src={require("../../assets/images/partners/natulab.png")}
            alt="natulab"
          />
        </div>
        <div class="col-md-2 col-4">
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

                <button className="btn btn-rounded btn-primary btn-sm px-3 mb-5">
                  Trabalhe conosco
                </button>
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
                <a className="text-white" href="">
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a className="text-white ml-3" href="">
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
                <a className="text-white ml-3" href="">
                  <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </a>
                <a className="text-white ml-3" href="">
                  <FontAwesomeIcon icon={faSkype} size="3x" />
                </a>
                <a className="text-white ml-3" href="">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </a>

                <h5 className="text-warning mt-5">
                  <strong>LINKS</strong> ÚTEIS
                </h5>
                <a className="text-white d-block" href="">
                  Anvisa
                </a>
                <a className="text-white d-block" href="">
                  Sefaz
                </a>
                <a className="text-white d-block" href="">
                  Receita Federal
                </a>
                <a className="text-white d-block" href="">
                  Sintegra
                </a>
                <a className="text-white d-block" href="">
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
