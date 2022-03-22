import React, { useEffect, useState } from "react";

import logo from "../../../assets/img/logo4.png";
import "./index.css";

import Icone from "../../template/icone";
import Menu from "../menu";

export default function Header() {
  const [backHeader, setBackHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (window.innerWidth < 589) {
      if (showMenu) {
        setShowMenu(false);
        console.log(showMenu);
      } else {
        setShowMenu(true);
        console.log(showMenu);
      }
    }else{
      setShowMenu(false)
    }
  };

  useEffect(() => {
    const scrollLIstener = () => {
      if (window.scrollY > 127 || window.innerWidth > 589) {
        setBackHeader(true);
      } else {
        setBackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollLIstener);

    return () => {
      window.removeEventListener("scroll", scrollLIstener);
    };
  }, []);

  return (
    <section className={`header ${showMenu || backHeader ? "header-show" : ""} ${showMenu? 'h-100': ''}fixed-top`}>
      <header className={`container d-flex ${showMenu? 'flex-column': 'flex-row'} align-items-center  align-items-center justify-content-between py-xl-4`}>
        <img
          className={`col-5 col-md-5 col-lg-4 col-xl-2 my-2`}
          src={logo}
          alt="Logotipo"
        />

        <div
          className={`d-md-flex col-md-7 col-lg-8 col-xl-10 justify-content-between ps-md-5`}
        >
          <Menu showMenu={showMenu}/>

          <div className="d-none d-lg-flex align-items-center ms-5 justify-content-end">
            <div className="d-none d-xl-flex redes-socias">
              <a href="https://www.facebook.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-secondary text-light px-2 rounded-circle m-1"
                  nameIcone="facebook"
                />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-secondary text-light px-1 rounded-circle m-1"
                  nameIcone="linkedin"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Icone
                  cssBootstrap="bg-secondary text-light px-1 rounded-circle m-1"
                  nameIcone="instagram"
                />
              </a>
            </div>

            <button className="att d-none d-lg-flex align-items-center text-white ms-3 px-4 py-1">
              <span className="py-1 pe-2">Atendimento</span>
              <Icone nameIcone="whatsapp" />
            </button>
          </div>
        </div>

        <button
          onClick={openMenu}
          className={`button-menu d-md-none h1 ${
            showMenu || backHeader ? " " : "text-white"
          }`}
        >
          <Icone nameIcone="bars" />
        </button>
      </header>
    </section>
  );
}
