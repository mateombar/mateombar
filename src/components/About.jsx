import React, { useState, useEffect } from 'react';
import { ListOfFeatures } from './ListOfFeatures';
import './styles/About.scss';
import experience from '../assets/svg/experience.svg';
import growth from '../assets/svg/growth.svg';
import performance from '../assets/svg/performance.svg';
export const About = () => {
    const data = [
        {
            image: experience,
            name: "experience",
            text: "Experience working with web apps"
        },
        {
            image: growth,
            name: "growth",
            text: "Good practices and performance"
        },
        {
            image: performance,
            name: "performance",
            text: "Professional growth"
        },
    ];
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        setFeatures(...features, data);
    }, []);
    if (!features.length) return <div>Loading ...</div>
    return (
        <section className="about">
            <article className="about__info">
                <h3>About</h3>
                <h1>I'm a ambitious <span>Frontend Developer</span> who wants to do great things</h1>
                <h2>Self-taught software developer. Lover of knowledge and adventure, cordial, charismatic and healthy. Always with a smile on his sexy face. That is what I am </h2>
            </article>
            <article className="about__features">
                <ListOfFeatures features={features} />
            </article>
        </section>

    )
}