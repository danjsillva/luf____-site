import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/fontawesome-free-brands";
import "./Styles.scss";

export default function WppButton(props) {
  return (
    <button id="wpp-button" type="button" className="btn btn-success btn-sm px-3">
      <FontAwesomeIcon icon={faWhatsapp} size="lg" /> WhatsApp now!
    </button>
  );
}
