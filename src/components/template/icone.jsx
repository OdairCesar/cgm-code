import React from 'react'

export default function Icone({ nameIcone, cssBootstrap }){
    return(
        <div class={`${cssBootstrap}`}>
            <i class={`fa fa-${nameIcone}`}></i>
        </div>
    )
}