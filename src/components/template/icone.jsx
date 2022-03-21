import React from 'react'

export default function Icone({ nameIcone, cssBootstrap }){
    return(
        <div className={`${cssBootstrap}`}>
            <i className={`fa fa-${nameIcone}`}></i>
        </div>
    )
}