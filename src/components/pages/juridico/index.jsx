import React from "react";
import "./index.css";

import Contato from "../../layout/contato";
import CardSoluções from "../../template/cardSolucoes";

import imgLogoJuridico from "../../../assets/img/logo7.png";
import imgBannerJuridico from "../../../assets/img/image6.png";
import imgSeta from "../../../assets/img/vector1.png";
import imgPlanSucess from "../../../assets/img/image13.png";
import imgPlanGestConsulBene from "../../../assets/img/image7.png";
import imgPlanLinhaCredi from "../../../assets/img/image3.png";
import imgPlanCambio from "../../../assets/img/image2.png";
import imgPlanSegEmpres from "../../../assets/img/image1.png";

export default function Juridico() {
  return (
    <>
      <section id='top' className="banner-juridico py-5">
        <div className="container-personalizado">
          <img
            className="d-none d-md-block imagem-banner-juridico col-md-6 col-xl-5 h-md-100"
            src={imgBannerJuridico}
            alt="Imagem banner da pagina juridico"
          />

          <div className="d-none d-xl-flex flex-column align-items-center align-seft-center col-xl-3">
            <img className="w-100" src={imgLogoJuridico} alt="Logotipo" />
            <img className="w-50"src={imgSeta} alt="Ver mais" />
          </div>

          <div className="info-banner d-flex flex-column justify-content-center py-5 col-md-6 col-xl-4">
            <h1 className="pt-5">
              Plano para a <br />
              sua empresa
            </h1>
            <div className="detalhe-titulo-dois"></div>
            <h5 className="pt-4 h4">
              Esteja bem preparado para imprevistos com você, sua empresa, seus
              funcionários e seu patrimônio.
            </h5>
          </div>
        </div>
      </section>

      <section className="cartoes-solucoes py-5">
        <div className="container d-flex flex-wrap">
          <CardSoluções
            coluna="col-12 col-md-6 col-lg-4"
            titulo="Planejamento Sucessório"
            descricao="É possível garantir a perpetuidade do seu negócio com um planejamento sucessório que atenda às suas necessidades."
            imagemFundo={imgPlanSucess}
          />
          <CardSoluções
            coluna="col-12 col-md-6 col-lg-4"
            titulo="Gestão e consultoria em benefícios"
            descricao="Vida, Saúde, Odontológico, Previdência"
            imagemFundo={imgPlanGestConsulBene}
          />
          <CardSoluções
            coluna="col-12 col-lg-4"
            titulo="Linhas de Crédito"
            descricao="Planejar a aquisição de máquinas, equipamentos e imóveis, bem como a troca da frota pode flexibilizar o fluxo de caixa da empresa"
            imagemFundo={imgPlanLinhaCredi}
          />
          <CardSoluções
            coluna="col-12 col-lg-6"
            titulo="Câmbio"
            descricao="Opere com segurança e tranquilidade com quem conhece o mercado."
            imagemFundo={imgPlanCambio}
          />
          <CardSoluções
            coluna="col-12 col-lg-6"
            titulo="Seguro Empresarial"
            descricao="Benefícios fiscais para as empresas, além de reter e fidelizar talentos, agrega valores às equipes e aos funcionários"
            imagemFundo={imgPlanSegEmpres}
          />
        </div>
      </section>
      <Contato />
    </>
  );
}
