import React from "react";
import "./index.css";

import Contato from "../../layout/contato";
import CardSoluções from "../../template/cardSolucoes";

import imgLogoFisico from "../../../assets/img/logo7.png";
import imgBannerFisico from "../../../assets/img/image4.png";
import imgSeta from "../../../assets/img/vector1.png";
import imgPlanTribu from "../../../assets/img/image13.png";
import imgPlanFinan from "../../../assets/img/image14.png";
import imgPlanAponse from "../../../assets/img/image15.png";
import imgPlanSucess from "../../../assets/img/image16.png";
import imgPlanRCProf from "../../../assets/img/image17.png";
import imgPlanGestAti from "../../../assets/img/image18.png";
import imgPlanGestRisc from "../../../assets/img/image19.png";

export default function Fisico() {
  return (
    <>
      <section id='top' className="banner-fisico py-5">
        <div className="container-personalizado">
          <div className="info-banner d-flex flex-column justify-content-center py-5 col-md-6 col-xl-4">
            <h1 className="pt-5">
              Planos <br />
              para você
            </h1>
            <div className="detalhe-titulo-dois"></div>
            <h5 className="pt-4 h3">
              Tranquilidade para você aproveitar o que a vida tem de melhor. Nós
              cuidamos de todo o resto para você.
            </h5>
          </div>

          <div className="d-none d-xl-flex flex-column align-items-center align-seft-center col-xl-3">
            <img className='w-100'src={imgLogoFisico} alt="Logotipo" />
            <img className='w-50' src={imgSeta} alt="Ver mais" />
          </div>

          <img
            className="imagem-banner-fisico d-none d-md-block col-md-6 col-xl-5"
            src={imgBannerFisico}
            alt="Imagem banner da pagina fisicos"
          />
        </div>
      </section>

      <section className="cartoes-solucoes py-5">
        <div className="container d-flex flex-wrap">
          <CardSoluções
            coluna="col-12 col-md-6 col-lg-4"
            titulo="Planejamento tributário"
            descricao="Você conhece as ferramentas que o mercado oferece para reduzir sua carga tributária?"
            imagemFundo={imgPlanTribu}
          />
          <CardSoluções
            coluna="col-12 col-md-6 col-lg-4"
            titulo="Planejamento financeiro"
            descricao="Você é o protagonista no controle de suas finanças?"
            imagemFundo={imgPlanFinan}
          />
          <CardSoluções
            coluna="col-12 col-lg-4"
            titulo="Planejamento da aposentadoria"
            descricao="Seu padrão de vida está garantido na sua aposentadoria?"
            imagemFundo={imgPlanAponse}
          />
          <CardSoluções
            coluna="col-12 col-lg-6"
            titulo="Planejamento Sucessório"
            descricao="Você possui liquidez para as custas da sucessão de seu patrimônio?"
            imagemFundo={imgPlanSucess}
          />
          <CardSoluções
            coluna="col-12 col-lg-6"
            titulo="RC Profissional"
            descricao="Proteção para sua carreira e imagem contra processos e riscos inerentes à sua profissão."
            imagemFundo={imgPlanRCProf}
          />
          <CardSoluções
            coluna="col-12 col-md-6 col-lg-4"
            titulo="Planejamento da	aposentadoria"
            descricao="Você já pensou em contar com uma gestora profissional para fazer as melhores escolhas de seus investimentos?"
            imagemFundo={imgPlanGestAti}
          />
          <CardSoluções
            coluna="col-12 col-md-6 col-lg-4"
            titulo="Gestão de riscos"
            descricao="Você possui alternativas para manter o padrão de vida da sua família e a sua dignidade, frente aos imprevistos da vida?"
            imagemFundo={imgPlanGestRisc}
          />
        </div>
      </section>
      <Contato />
    </>
  );
}
