import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

import imgLogo from "../../../assets/img/logo2.png";
import imgLogo2rs from "../../../assets/img/image11.png";
import Icone from "../../template/icone";

export default function Footer() {
  return (
    <>
      <section className="info-extra text-white">
        <div className="container d-flex flex-wrap py-5 justify-content-center">
          <div className="d-flex flex-column flex-md-row col-9 col-md-6">
            <img className="p-5 p-md-3 p-lg-0" src={imgLogo} alt="Logo do rodapé" />

            <div className="paginas d-flex flex-column align-items-center align-items-md-start pt-4 px-5 px-md-2 px-lg-5">
              <Link to="/#top">Início</Link>
              <Link to="/sobre#top">Sobre</Link>
              <Link to="/fisico#top">Fisico</Link>
              <Link to="/juridico#top">Juridico</Link>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between col-12 col-md-6">
            <div className="info-contato d-flex flex-column align-items-center align-items-md-start pt-4 px-5 px-md-0">
              <p>Informações</p>
              <p className="d-flex h5">
                <Icone cssBootstrap="me-2" nameIcone="facebook" />
                (00) 0000-0000
              </p>
              <p className="d-flex h5">
                <Icone cssBootstrap="me-2" nameIcone="facebook" />
                contato@cgm.com.br
              </p>
              <p className="d-flex h5">
                <Icone cssBootstrap="me-2" nameIcone="facebook" />
                Seg. a sex. das 9h às 18h
              </p>
            </div>

            <div className="info-redesocial d-flex justify-content-center align-items-center text-center">
              <a href="https://www.facebook.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-white text-black-50 mx-1 rounded-circle"
                  nameIcone="facebook"
                />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-white text-black-50 mx-1 rounded-circle"
                  nameIcone="linkedin"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-white text-black-50 mx-1 rounded-circle"
                  nameIcone="instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="copy">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <p className="py-0 my-0">CGM © 2022 - Todos os direitos reservados</p>
          <img src={imgLogo2rs} alt="Logo da desenvolvedora" />
        </div>
      </section>
    </>
  );
}
