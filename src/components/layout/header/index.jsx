import React from 'react'

import logo from '../../../assets/img/logo4.png'
import './index.css'

import Icone from '../../template/icone'
import Menu from '../menu'

export default function Header(){
    return(
        <header class='container'>
            <div class='d-flex align-items-center justify-content-between my-4'>
                <img src={logo} alt='Logotipo'/>

                <Menu />
                
                <div class='d-flex align-items-center'>
                    <div class='d-flex redes-socias'>
                        <Icone cssBootstrap='bg-secondary text-light px-2' nameIcone='facebook'/>
                        <Icone cssBootstrap='bg-secondary text-light px-1' nameIcone='linkedin'/>
                        <Icone cssBootstrap='bg-secondary text-light px-1' nameIcone='instagram'/>
                    </div>

                    <div className='d-flex align-items-center text-white ms-3 px-4 py-1 att'>
                        <span>Atendimento</span>
                        <Icone nameIcone='whatsapp' />
                    </div>
                </div>
            </div>
        </header>
    )
}