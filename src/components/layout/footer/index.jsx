import React from "react";

import "./index.css";

import imgLogo from "../../../assets/img/logo2.png";
import imgLogo2rs from "../../../assets/img/image11.png";
import Icone from "../../template/icone";

export default function Footer() {
  return (
    <>
      <section className="info-extra text-white">
        <div className="container d-flex py-5 justify-content-between">
          <img src={imgLogo} alt="Logo do rodapé" />

          <div className="paginas pt-4">
            <p>Início</p>
            <p>Sobre</p>
            <p>Soluções</p>
            <p>Contatos</p>
          </div>

          <div className="info-contato pt-4">
            <p>Informações</p>
            <p className="d-flex h5">
              <Icone cssBootstrap='me-2' nameIcone="facebook" />
              (00) 0000-0000
            </p>
            <p className="d-flex h5">
              <Icone cssBootstrap='me-2' nameIcone="facebook" />
              contato@cgm.com.br
            </p>
            <p className="d-flex h5">
              <Icone cssBootstrap='me-2' nameIcone="facebook" />
              Seg. a sex. das 9h às 18h
            </p>
          </div>

          <div className="info-redesocial d-flex justify-content-end align-items-center col-3 text-center">
            <Icone cssBootstrap='bg-white mx-1 rounded-circle' nameIcone="facebook" />
            <Icone cssBootstrap='bg-white mx-1 rounded-circle' nameIcone="linkedin" />
            <Icone cssBootstrap='bg-white mx-1 rounded-circle' nameIcone="instagram" />
          </div>
        </div>
      </section>

      <section className="copy">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <p className="py-0 my-0">CGM © 2022 - Todos os direitos reservados</p>
          <img src={imgLogo2rs} alt='Logo da desenvolvedora'/>
        </div>
      </section>
    </>
  );
}
