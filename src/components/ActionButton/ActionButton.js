import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/fontawesome-free-brands";

import "./ActionButton.scss";

export default function ActionButton(props) {
  return (
    <button
      id="action-button"
      type="button"
      className="btn btn-rounded btn-success btn-sm px-3 d-none d-md-block"
      onClick={() => window.open("https://wa.me/557599601703")}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="lg" /> WHATSAPP
    </button>
  );
}
