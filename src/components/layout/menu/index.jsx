import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default function Menu() {
  return (
    <ul className="menu d-flex align-items-center justify-content-between text-secondary m-0 p-0">
      <li>
        <Link to="/">Início</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link to="/fisico">Fisico</Link>
      </li>
      <li>
        <Link to="/juridico">Juridico</Link>
      </li>
    </ul>
  );
}
