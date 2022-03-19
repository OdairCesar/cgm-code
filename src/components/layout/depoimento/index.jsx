import React from 'react'
import './index.css'

import TituloDois from '../../template/tituloDois';

import imgAsbas from "../../../assets/img/asbas.png";
import imgDepoimentos from "../../../assets/img/image9.png";

export default function Depoimento(){
    return(
      <section className="depoimentos">
      <div className="container d-flex flex-column py-5">
        <img
          className="img-depoimentos"
          src={imgDepoimentos}
          alt="Desenho de fundo dos depoimentos"
        />

        <TituloDois>
            O que nossos clientes <br />
            falam sobre nós:
        </TituloDois>

        <div className="lista-depoimentos d-flex flex-row justify-content-between mt-5">
          <div className="cardDepoimento">
            <div className="avaliacao">
              <img src={imgAsbas} alt="Depoimento" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum....
              </p>
            </div>

            <div className="fw-bolder mt-3">Cliente de Bauru - SP</div>
          </div>

          <div className="cardDepoimento">
            <div className="avaliacao">
              <img src={imgAsbas} alt="Depoimento" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum....
              </p>
            </div>

            <div className="fw-bolder mt-3">Cliente de Bauru - SP</div>
          </div>

          <div className="cardDepoimento">
            <div className="avaliacao">
              <img src={imgAsbas} alt="Depoimento" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum....
              </p>
            </div>

            <div className="fw-bolder mt-3">Cliente de Bauru - SP</div>
          </div>
        </div>
      </div>
    </section>
    )
}