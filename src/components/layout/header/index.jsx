import React, { useEffect } from "react";

import logo from "../../../assets/img/logo4.png";
import "./index.css";

import Icone from "../../template/icone";
import Menu from "../menu";

export default function Header() {
  return (
    <section className='header fixed-top'>
      <header className="container d-flex align-items-center align-items-center justify-content-between py-xl-4">
        <img className='col-6 col-md-5 col-lg-4 col-xl-2 me-md-5 me-lg-4' src={logo} alt="Logotipo" />

        <div className="d-none d-md-flex col-md-7 col-lg-8 col-xl-10 justify-content-between">
          <Menu />

          <div className="d-none d-lg-flex align-items-center ms-5 justify-content-end">
            <div className="d-none d-xl-flex redes-socias">
              <a href="https://www.facebook.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-secondary text-light px-2 rounded-circle m-1"
                  nameIcone="facebook"
                />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-secondary text-light px-1 rounded-circle m-1"
                  nameIcone="linkedin"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-secondary text-light px-1 rounded-circle m-1"
                  nameIcone="instagram"
                />
              </a>
            </div>

            <button className="att d-none d-lg-flex align-items-center text-white ms-3 px-4 py-1">
              <span className="py-1 pe-2">Atendimento</span>
              <Icone nameIcone="whatsapp" />
            </button>
          </div>
        </div>
        
        <button className="button-menu d-md-none h1"><Icone nameIcone='bars' /></button>
      </header>
    </section>
  );
}
