import React from "react";
import './cardSolucoes.css'

import Icone from "./icone";

export default function CardSoluções({ coluna, imagemFundo, titulo, descricao }) {
  return (
    <div className={`card-solucoes d-flex flex-column align-items-start py-4 px-3 ${coluna ?? coluna}`}>
      <div className='d-flex flex-column justify-content-between text-white px-4 py-5' style={{ 
          backgroundImage: `linear-gradient( #111E2781, #111E2781), url(${imagemFundo ?? imagemFundo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '459px',
          borderRadius: '25px'
        }} >
        <h2 className='fw-bold'>{titulo ?? titulo}</h2>
        <p className='fw-lighter h5'>{descricao ?? descricao}</p>
      </div>
      <button className="d-flex">
        Solicitar atendimento 
        <Icone cssBootstrap='ps-2' nameIcone='whatsapp'/>
      </button>
    </div>
  );
}
