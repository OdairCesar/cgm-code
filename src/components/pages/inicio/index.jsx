import React from "react";

import "./index.css";

import Menu from "../../layout/header";
import Contato from "../../layout/contato";
import Icone from "../../template/icone";
import Depoimento from "../../layout/depoimento";

import logo from "../../../assets/img/logo7.png";
import imgPessoaFisica from "../../../assets/img/image4.png";
import imgPessoaJurídica from "../../../assets/img/image6.png";
import imgHistoria from "../../../assets/img/image8.png";
import Footer from "../../layout/footer";
import TituloDois from "../../template/tituloDois";

export default function Inicio() {
  return (
    <>
      <Menu />
      {/*================= BANNER/INICIO =====================*/}
      <section className="banner-inicio">
        <div className="banner-inicio-conteudo container d-flex align-items-end">
          <div className="d-flex flex-column pb-5">
            <h1 className="text-white fw-bold">
              <span className="sombra">Sua empresa sempre </span>
              <br />
              protegida com a gente!
            </h1>
            <span className="efeito-loop mt-5 mb-2"></span>

            <div className="d-flex mt-2 mb-5">
              <span class="circulo-ativo me-2"></span>
              <span class="circulo me-2"></span>
              <span class="circulo me-2"></span>
              <span class="circulo me-2"></span>
            </div>
          </div>
        </div>
      </section>

      {/*================= SOLUÇÕES =====================*/}
      <section className="solucoes-inicio">
        <div className="container p-0 py-5">
          <div className="solucoes-titulo d-flex flex-column align-items-center">
            <img src={logo} alt="Imagem Soluções" />
            <h1>Soluções</h1>
            <span>Trabalhamos com as melhores seguradoras</span>
          </div>

          <div className="d-flex align-items-start justify-content-between">
            <div className="cardApresentacao d-flex flex-column align-items-center col-6">
              <img src={imgPessoaFisica} alt="Sou Pessoa Fisica" />
              <span className="d-flex">
                Sou Pessoa Física
                <Icone cssBootstrap="ps-2" nameIcone="arrow-right" />
              </span>
            </div>

            <div className="cardApresentacao d-flex flex-column align-items-center col-6">
              <img src={imgPessoaJurídica} alt="Sou Pessoa Fisica" />
              <span className="d-flex">
                Sou Pessoa Juridica
                <Icone cssBootstrap="ps-2" nameIcone="arrow-right" />
              </span>
            </div>
          </div>

          <div className="parceiros-inicio d-flex flex-column align-items-center my-5">
            <TituloDois>
              Nossos Parceiros
            </TituloDois>

            <div className="swiper d-flex justify-content-between align-items-center mt-2">
              <div className="swiper-button-prev">
                <Icone cssBootstrap="h3" nameIcone="angle-left" />
              </div>

              <div
                className="swiper-wrapper d-flex justify-content-around"
                style={{ width: "1300px" }}
              >
                <span class="cardParceiros">Marca</span>
                <span class="cardParceiros">Marca</span>
                <span class="cardParceiros">Marca</span>
                <span class="cardParceiros">Marca</span>
                <span class="cardParceiros">Marca</span>
                <span class="cardParceiros">Marca</span>
              </div>

              <div className="swiper-button-next">
                <Icone cssBootstrap="h3" nameIcone="angle-right" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Depoimento />

      <section className="Historia">
        <div className="container d-flex py-5 align-items-stretch">
          <img
            className="col-7"
            src={imgHistoria}
            alt="Imagem do 'nossa histaria'"
          />

          <div className="nossa-historia d-flex flex-column justify-content-center col-5">
            <h5>Muito mais do que seguro.</h5>
            <h1>Segurança</h1>
            <h4>Muito prazer! Nós somos a CGM Seguro...</h4>
            <p>
              São mais de 00 anos de mercado, priorizando e aperfeiçoando o
              atendimento ao cliente, desde suas mais simples necessidades até
              seu momento mais critico, o sinistro.
            </p>
            <p>
              Tratamos nossos clientes com respeito e singularidade, norteando
              suas escolhas desde a contratação da apólice até o momento da
              utilização de suas garantias.
            </p>
            <p>
              Entendemos que uma parceria de sucesso esta diretamente ligada a
              Determinação e Honestidade,
            </p>

            <button className="button-historia d-flex justify-content-center text-white h5">
              Conheça nossa história
              <Icone cssBootstrap='ms-2' nameIcone='arrow-right' />
            </button>
          </div>
        </div>
      </section>

      <Contato />
      <Footer />
    </>
  );
}
