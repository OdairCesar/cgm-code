import React from 'react'

export default function Icone({ nameIcone, cssBootstrap }){
    return(
        <div class={`${cssBootstrap} rounded-circle m-1`}>
            <i class={`fa fa-${nameIcone}`}></i>
        </div>
    )
}