import React, { useState, useEffect } from 'react';
import './styles/Navbar.scss';
import logo from '../assets/svg/logo__white.svg';
import menu from '../assets/svg/hamurger.svg';
export const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [navbarLinks, setNavbarLinks] = useState("navbar__links");

    useEffect(() => {
        if (isMenu) {
            setNavbarLinks("navbar__links navbar__links--active");
        } else if (navbarLinks === 'navbar__links') {

        } else {
            setTimeout(() => {
                setNavbarLinks("navbar__links")
            }, 400);
            setNavbarLinks("navbar__links navbar__links--deactive")
        }
    }, [isMenu])

    return (
        <nav className={isMenu ? "navbar navbar--menu" : "navbar"}>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img src={logo} alt="Logo" />
                    <span>Mateo</span>
                </div>
                <ul className={navbarLinks}>
                    <li onClick={() => setIsMenu(false)} className="link"><a href="#about">About</a></li>
                    <li onClick={() => setIsMenu(false)} className="link"><a href="#projects">Projects</a></li>
                    <li onClick={() => setIsMenu(false)} className="link"><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar__menu">
                    <img onClick={() => setIsMenu(!isMenu)} src={menu} alt="menu" />
                </div>
            </div>
        </nav>
    )
}