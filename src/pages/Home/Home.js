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

export default function Home(props) {
  return (
    <>
      <section id="home-banner">
        <div className="container">
          <div
            className="text-primar text-right float-right w-50"
            style={{ marginTop: "50vh" }}
          >
            <h2>
              Uma busca permanente pela excelência e qualidade dos produtos
              comercializados
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
    </>
  );
}
