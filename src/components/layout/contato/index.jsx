import React from "react";
import "./index.css";

import imgContato from "../../../assets/img/image10.png";
import Icone from "../../template/icone";

export default function Contato() {
  return (
    <section className="contato py-5">
      <div className="container d-flex flex-column-reverse flex-lg-row">
        <div className="d-flex flex-column col-12 col-lg-6 py-4 pe-4">
          <div className="titulo-contato">
            <h4>Ficou com dúvidas?</h4>
            <h2>Entre em contato</h2>
          </div>

          <form className="contato-formulario d-flex flex-column">
            <input type="text" placeholder="Nome"></input>
            <input type="email" placeholder="E-mail"></input>
            <input type="number" placeholder="Telefone/Whatsapp"></input>
            <textarea className='p-2' placeholder="Mensagem"></textarea>
            <button className='buttonFormulario d-flex justify-content-center'>
              Enviar
              <Icone cssBootstrap='ms-1' nameIcone='arrow-right'/>
            </button>
          </form>
        </div>

        <img className="col-12 col-lg-6" src={imgContato} alt="Imagem Contato" />
      </div>
    </section>
  );
}
