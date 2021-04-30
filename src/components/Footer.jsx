import React from 'react';
import './styles/Footer.scss';
import githubtWhite from '../assets/svg/github-white.svg';
import linkedin from '../assets/svg/linkedin.svg';
export const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer__container">
                <h1>Let's Talk</h1>
                <p>Please feel free to contact me if you found this interesting or if you feel I could be of help in any project you have, I would love to hear from you!</p>
                <p>mateomontabaron@gmail.com</p>
                <div className="footer__links">
                    <a href="https://github.com/mateombar" target="_blank" rel="noopener noreferrer">
                        <img src={githubtWhite} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/mateo-monta%C3%B1ez-baron-648bab196/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
                
                <p>All rigths reserved</p>
            </div>
        </footer>
    )
}
