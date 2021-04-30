import React, { useState, useEffect } from 'react';
import { Project } from './Project';
import './styles/Projects.scss';

import amano from '../assets/img/amano.png';
import pokedex from '../assets/img/pokedex.png';
import petgram from '../assets/img/petgram.png';
import rockers from '../assets/img/rockers.png';
export const Projects = () => {
    const data = [
        {
            id: 1,
            image: amano,
            title: 'Amano Store',
            description: 'A basic store example',
            pageUrl: 'https://amano-store.web.app/',
            github: 'https://github.com/mateombar/amano-store',
        },
        {
            id: 2,
            image: pokedex,
            title: 'Pokedex',
            description: 'Find the pokemons you like, save them to your favorites list and share them to your friends',
            pageUrl: 'https://pokedex-vue-a2a13.web.app/',
            github: 'https://github.com/mateombar/pokedex',
        },
        {
            id: 3,
            image: petgram,
            title: 'Petgram',
            description: 'The perfect social network for your pets, create an example account and enjoy',
            pageUrl: 'https://petgram-server-mateombar-mateombar.vercel.app/',
            github: 'https://github.com/mateombar/Petgram',
        },
        {
            id: 4,
            image: rockers,
            title: 'Rockers',
            description: 'My first React and Firestore application. Find the rockers you like or create your own',
            pageUrl: 'https://rockers-c5e8f.firebaseapp.com/rockers',
            github: 'https://github.com/mateombar/Rockers',
        },
    ]
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects([...data]);
    }, []);
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h3>Projects</h3>
                <div className="projects__list">
                    {
                        projects.map(project => (
                            <Project key={project.id} project={project} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}