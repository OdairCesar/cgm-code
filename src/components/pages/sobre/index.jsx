import React from "react";
import "./index.css";

import Depoimento from "../../layout/depoimento";
import TituloDois from "../../template/tituloDois";

import imgLogoSobre from "../../../assets/img/logo1.png";

export default function Sobre() {
  return (
    <>
      <section id='top' className="banner-sobre py-5">
        <div className="container d-flex flex-column justify-content-end py-5">
          <h1 className="mb-5 text-white text-uppercase">
            Sobre a cgm
            <br /> corretora de seguros
          </h1>
        </div>
      </section>

      <section className="apresentacao-sobre py-5">
        <div className="container py-5">
          <div className="d-flex flex-column flex-md-row">
            <img className="col-8 col-md-4" src={imgLogoSobre} alt="" />

            <div className="d-flex flex-column col-md-8 justify-content-evenly">
              <div className="titulo-apresentacao-sobre">
                <h5>Muito mais do que seguro.</h5>
                <h1>Segurança!</h1>
                <h4>Muito prazer! Nós somos a CGM Seguro...</h4>
              </div>

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
            </div>
          </div>

          <div>
            <p>
              A empresa CGM Corretora de Seguros nasceu de uma necessidade de
              oferecermos a médicos, dentistas e demais profissionais da área da
              saúde entre outros, soluções completas e efetivas, para prover uma
              blindagem jurídica a esses profissionais e prestadores de
              serviços, proporcionando assim tranquilidade para que os mesmos
              exerçam sua profissão.
            </p>
            <p>
              Nós trabalhamos com produtos exclusivos, pois somos uma empresa
              inovadora, e trabalhamos á fim de trazer o que há de melhor para
              médicos, dentistas e demais profissionais da área da saúde em
              termos de segurança profissional, proteção para pacientes em caso
              de intercorrências cirúrgicas e técnicas médicas atuais e impares.
            </p>
            <p>
              Nosso objetivo principal é a busca da excelência no atendimento, e
              o alcance dos melhores resultados para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="ideias py-5">
        <div className="container d-flex flex-column py-3">
          <TituloDois>Nossas Ideias</TituloDois>

          <div className="lista-ideias d-flex flex-wrap justify-content-center mt-5">
            <div className="d-flex col-md-6 col-xl-4">
              <div className="d-flex flex-column align-items-center">
                <h1 className="py-3">Missão</h1>
                <div className="descricao-ideia d-flex flex-column mx-3 px-3 py-1 text-center justify-content-center">
                  <p>
                    Criar vínculos fortes e duradouros com nossos clientes,
                    fornecendo-lhes as melhores soluções de blindagem jurídica
                    profissional, proteção financeira contra intercorrências
                    cirúrgicas, demais soluções relacionadas a segurança
                    profissional de nossos clientes e projetos revolucionários e
                    inovadores.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex col-md-6 col-xl-4">
              <div className="d-flex flex-column align-items-center">
                <h1 className="py-3">Visão</h1>
                <div className="descricao-ideia d-flex flex-column mx-3 px-3 text-center justify-content-center">
                  <p>
                    Sermos reconhecidos nacionalmente como uma empresa que traz
                    o que há de melhor em termos de proteção profissional, para
                    profissionais da área da saúde. Trazer o que há de mais
                    inovador para médicos e pacientes.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex col-md-6 col-xl-4">
              <div className="d-flex flex-column align-items-center">
                <h1 className="py-3">Missão</h1>
                <div className="descricao-ideia d-flex flex-column mx-3 px-3 text-center justify-content-center">
                  <p>
                    •Integridade: Honestidade e transparência norteiam nossas
                    ações;·
                  </p>
                  <p>
                    •Ética: Agimos com ética, respeitamos as leis e os
                    princípios morais;·
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Depoimento />
    </>
  );
}
