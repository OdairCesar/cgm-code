import React from 'react'
import './tituloDois.css'

export default function TituloDois(props){
    return(
        <div className='titulo-dois d-flex flex-column align-items-center align-self-center'>
          <h1 className='pt-5 pb-3 text-center'>
            {props.children}
          </h1>
          <div className='detalhe-titulo-dois'></div>
        </div>

    )
}