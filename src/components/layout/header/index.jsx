import React from 'react'

import logo from '../../../assets/img/logo4.png'
import './index.css'

import Icone from '../../template/icone'
import Menu from '../menu'

export default function Header(){
    return(
        <section className='fixed-top bg-white'>
        <header className='container'>
            <div className='header d-flex align-items-center justify-content-between align-items-center'>
                <div className='d-flex'>
                    <img className='me-5' src={logo} alt='Logotipo'/>

                    <Menu/>
                </div>
                
                <div className='d-flex align-items-center'>
                    <div className='d-flex redes-socias'>
                        <a href='https://www.facebook.com/' target="_blank"><Icone cssBootstrap='bg-secondary text-light px-2 rounded-circle m-1' nameIcone='facebook'/></a>
                        <a href='https://www.linkedin.com/' target="_blank"><Icone cssBootstrap='bg-secondary text-light px-1 rounded-circle m-1' nameIcone='linkedin'/></a>
                        <a href='https://www.instagram.com/' target="_blank"><Icone cssBootstrap='bg-secondary text-light px-1 rounded-circle m-1' nameIcone='instagram'/></a>
                    </div>

                    <button className='att d-flex align-items-center text-white ms-3 px-4 py-1'>
                        <span className='py-1 pe-2'>Atendimento</span>
                        <Icone nameIcone='whatsapp' />
                    </button>
                </div>
            </div>
        </header>
        </section>
    )
}