import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import Contato from "../../layout/contato";
import Icone from "../../template/icone";
import Depoimento from "../../layout/depoimento";

import logo from "../../../assets/img/logo7.png";
import imgPessoaFisica from "../../../assets/img/image4.png";
import imgPessoaJurídica from "../../../assets/img/image6.png";
import imgHistoria from "../../../assets/img/image8.png";
import TituloDois from "../../template/tituloDois";

export default function Inicio() {
  let [loop, setLoop ] = useState([]);
  let [contList, setContList ] = useState(0);
  let [tamLoop, setTamLoop ] =  useState(1);

  useEffect(() => {
    setLoop(document.querySelectorAll(".cardParceiros"));
    if(window.innerWidth >= 1200) { 
      setTamLoop(6)
    }else if(window.innerWidth >= 960){
      setTamLoop(4)
    }else if(window.innerWidth >= 720){
      setTamLoop(3)
    }else{
      setTamLoop(1)
    }
    
    console.log(window.innerWidth > 1190)
  }, []);

  const nextLoop = () => {
    if (!(contList + tamLoop >= 10)) {
      if(window.innerWidth > 1190){
        loop[contList].classList.add("d-none", "d-md-none" ,"d-lg-none", "d-xl-none");
        loop[contList + tamLoop].classList.remove("d-none", "d-md-none" ,"d-lg-none", "d-xl-none");
      }else if(window.innerWidth > 960){
        loop[contList].classList.add("d-none", "d-md-none" ,"d-lg-none");
        loop[contList + tamLoop].classList.remove("d-none", "d-md-none" ,"d-lg-none");
      }else if(window.innerWidth > 720){
        loop[contList].classList.add("d-none", "d-md-none");
        loop[contList + tamLoop].classList.remove("d-none", "d-md-none");
      }else{
        loop[contList].classList.add("d-none");
        loop[contList + tamLoop].classList.remove("d-none");
      }
      setContList(contList + 1);
    }
  };

  const prevLoop = () => {
    if(!(contList < 0)){
      if(window.innerWidth > 1190){
        loop[contList + tamLoop].classList.add("d-none", "d-md-none" ,"d-lg-none", "d-xl-none");
        loop[contList].classList.remove("d-none", "d-md-none" ,"d-lg-none", "d-xl-none");
      }else if(window.innerWidth > 960){
        loop[contList + tamLoop].classList.add("d-none", "d-md-none" ,"d-lg-none");
        loop[contList].classList.remove("d-none", "d-md-none" ,"d-lg-none");
      }else if(window.innerWidth > 720){
        loop[contList + tamLoop].classList.add("d-none", "d-md-none");
        loop[contList].classList.remove("d-none", "d-md-none");
      }else{
        loop[contList + tamLoop].classList.add("d-none");
        loop[contList].classList.remove("d-none");
      }
      setContList(contList - 1);
    }
  };

  return (
    <>
      {/*================= BANNER/INICIO =====================*/}
      <section id="top" className="banner-inicio">
        <div className="banner-inicio-conteudo container d-flex justify-content-center align-items-start justify-content-md-start align-items-md-end pt-5 pt-md-0">
          <div className="d-flex flex-column py-5">
            <h1 className="titulo-banner-inicio text-white pt-5">
              <span className="sombra">Sua empresa sempre </span>
              <br />
              protegida com a gente!
            </h1>
            <span className="d-none d-md-block efeito-loop mt-5 mb-2"></span>

            <div className="d-none d-md-flex mt-2 mb-5">
              <span className="circulo-ativo me-2"></span>
              <span className="circulo me-2"></span>
              <span className="circulo me-2"></span>
              <span className="circulo me-2"></span>
            </div>
          </div>
        </div>
      </section>

      {/*================= SOLUÇÕES =====================*/}
      <section className="solucoes-inicio">
        <div className="container py-5">
          <div className="solucoes-titulo d-flex flex-column align-items-center">
            <img src={logo} alt="Imagem Soluções" />
            <h1>Soluções</h1>
            <h5>Trabalhamos com as melhores seguradoras</h5>
          </div>

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="cardApresentacao d-flex flex-column align-items-center col-12 col-md-6 p-3">
              <img
                className="w-100"
                src={imgPessoaFisica}
                alt="Sou Pessoa Fisica"
              />
              <button className="d-flex">
                <Link to="/fisico">Sou Pessoa Física</Link>
                <Icone cssBootstrap="ps-2" nameIcone="arrow-right" />
              </button>
            </div>

            <div className="cardApresentacao d-flex flex-column align-items-center col-12 col-md-6 p-3">
              <img
                className="w-100"
                src={imgPessoaJurídica}
                alt="Sou Pessoa Fisica"
              />
              <button className="d-flex">
                <Link to="/juridico">Sou Pessoa Juridica</Link>
                <Icone cssBootstrap="ps-2" nameIcone="arrow-right" />
              </button>
            </div>
          </div>

          <div className="parceiros-inicio d-flex flex-column align-items-center my-5">
            <TituloDois>Nossos Parceiros</TituloDois>

            <div className="d-flex justify-content-between align-items-center w-100 mt-5 px-4">
              <div className="button-prev" onClick={prevLoop}>
                <Icone cssBootstrap="h3" nameIcone="angle-left" />
              </div>

              <div className="loop-parceiros d-flex justify-content-center justify-content-md-between w-100 px-2">
                <span className="cardParceiros">Marca 1</span>
                <span className="cardParceiros d-none d-md-block">Marca 2</span>
                <span className="cardParceiros d-none d-md-block">Marca 3</span>
                <span className="cardParceiros d-none d-lg-block">Marca 4</span>
                <span className="cardParceiros d-none d-xl-block">Marca 5</span>
                <span className="cardParceiros d-none d-xl-block">Marca 6</span>
                <span className="cardParceiros d-none">Marca 7</span>
                <span className="cardParceiros d-none">Marca 8</span>
                <span className="cardParceiros d-none">Marca 9</span>
                <span className="cardParceiros d-none">Marca 10</span>
              </div>

              <div className="button-next" onClick={nextLoop}>
                <Icone cssBootstrap="h3" nameIcone="angle-right" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Depoimento />

      <section className="historia">
        <div className="container d-flex flex-column flex-lg-row py-5 align-items-center">
          <img
            className="col-12 col-lg-7"
            src={imgHistoria}
            alt="Imagem do 'nossa histaria'"
          />

          <div className="nossa-historia d-flex flex-column justify-content-center col-lg-5">
            <h5>Muito mais do que seguro.</h5>
            <h1>Segurança!</h1>
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
              <Link to="/sobre">Conheça nossa história</Link>
              <Icone cssBootstrap="ms-2" nameIcone="arrow-right" />
            </button>
          </div>
        </div>
      </section>

      <Contato />
    </>
  );
}
