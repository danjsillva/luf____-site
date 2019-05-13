import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faTag } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

import Product1 from "../../assets/images/products/product-1.jpg";
import Product2 from "../../assets/images/products/product-2.jpg";
import Product3 from "../../assets/images/products/product-3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
            <h1 className="d-none d-md-block">
              UMA BUSCA PERMANENTE PELA <strong>EXCELÊNCIA E QUALIDADE</strong>{" "}
              DOS PRODUTOS COMERCIALIZADOS
            </h1>

            <h6>LUFARMA DISTRIBUIDORA FARMACÊUTICA</h6>
            {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}

            <div className="form-row mt-5">
              {/* <div className="col-12 col-md-4">
                <Link to="/catalogo" className="btn btn-rounded btn-secondary btn-block">
                  <FontAwesomeIcon icon={faTag} /> CATÁLOGO
                </Link>
              </div> */}
              <div className="col-12 col-md-4">
                <button
                  className="btn btn-rounded btn-warning btn-block"
                  onClick={() =>
                    window.open("http://lufarma.resultwebvendas.com.br/#/login")
                  }
                >
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
    style={{ marginTop: "-48px", position: "absolute", cursor: "pointer" }}
  >
    <span
      href="/"
      className="text-warning"
      onClick={() => window.scrollTo(window.scrollX, window.innerHeight - 72)}
    >
      <FontAwesomeIcon icon={faChevronCircleDown} size="2x" />
    </span>
  </div>
);

const SectionProducts = props => {
  const settings = {
    arrows: true,
    autoplay: true,
  };

  return (
    <section id="section-products" className="">
      <div className="containe">
        <Slider {...settings}>
          <div>
            <div className="row no-gutters">
              <div className="col">
                <img src={Product1} alt="" className="product-image" />
              </div>
              <div className="col">
                <img src={Product2} alt="" className="product-image" />
              </div>
              <div className="col">
                <img src={Product3} alt="" className="product-image" />
              </div>
            </div>
          </div>
          <div>
            <div className="row no-gutters">
              <div className="col">
                <img src={Product1} alt="" className="product-image" />
              </div>
              <div className="col">
                <img src={Product2} alt="" className="product-image" />
              </div>
              <div className="col">
                <img src={Product3} alt="" className="product-image" />
              </div>
            </div>
          </div>
          <div>
            <div className="row no-gutters">
              <div className="col">
                <img src={Product1} alt="" className="product-image" />
              </div>
              <div className="col">
                <img src={Product2} alt="" className="product-image" />
              </div>
              <div className="col">
                <img src={Product3} alt="" className="product-image" />
              </div>
            </div>
          </div>
        </Slider>
        {/* <div className="row no-gutters">
        <div className="col">
          <img src={Product1} alt="" className="product-image" />
        </div>
        <div className="col">
          <img src={Product2} alt="" className="product-image" />
        </div>
        <div className="col">
          <img src={Product3} alt="" className="product-image" />
        </div>
      </div> */}
      </div>
    </section>
  );
};

const SectionTelesales = props => (
  <section id="section-telesales" className="bg-warning">
    <div className="container py-5 text-center">
      <h4>
        <strong>TELEVENDAS</strong>
      </h4>
      {/* <span className="d-block">Segunda à sexta: 8h às 19h</span> */}

      <div className="row">
        <div className="col-12 col-md-3 offset-md-3">
          <small>Vitória da Conquista</small>
          <h3>0800 284 5151</h3>
        </div>
        <div className="col-12 col-md-3">
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
      <SectionProducts />
    </>
  );
}
