import React from 'react';
import './styles/Banner.scss';
import dev from '../assets/svg/dev.svg';
export const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__container">
                <article className="banner__info">
                    <h2 className="banner__profession">I'm Frontend<br />Developer</h2>
                    <h1 className="banner__title"><span className="banner__title--enphasis">Hello,</span> my name is Mateo</h1>
                </article>
                <article className="banner__svg">
                    <img src={dev} alt="Developer"/>
                </article>
            </div>
        </section>
    )
}