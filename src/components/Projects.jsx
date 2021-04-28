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
            description: 'A basic store example'
        },
        {
            id: 2,
            image: pokedex,
            title: 'Pokedex',
            description: 'Find the pokemons you like, save them to your favorites list and share them to your friends'
        },
        {
            id: 3,
            image: petgram,
            title: 'Petgram',
            description: 'The perfect social network for your pets, create an example account and enjoy'
        },
        {
            id: 4,
            image: rockers,
            title: 'Rockers',
            description: 'My first React and Firestore application. Find the rockers you like or create your own'
        },
    ]
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects([...data]);
    }, []);
    return (
        <section className="projects">
            <div className="projects__container">
                <h3>Projects</h3>
                    {
                        projects.map(project => (
                            <Project key={project.id} project={project} />
                        ))
                    }
            </div>
        </section>
    )
}