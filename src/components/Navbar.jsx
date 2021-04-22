import React, { useState } from 'react';
import './styles/Navbar.scss';
import logo from '../assets/svg/logo__white.svg';
import menu from '../assets/svg/hamurger.svg';
export const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className={isMenu ? 'navbar__container navbar__container--active' : 'navbar__container'}>
                <div className="navbar__logo">
                    <img src={logo} alt="Logo" />
                    <span>Mateo</span>
                </div>
                <ul className="navbar__links">
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