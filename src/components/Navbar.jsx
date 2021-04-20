import React from 'react';
import './styles/Navbar.scss';
import logo from '../assets/svg/logo__white.svg';
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img src={logo} alt="Logo" />
                    <span>Mateo</span>
                </div>
            </div>
        </nav>
    )
}