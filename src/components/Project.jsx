import React from 'react';
import { useNearScreen } from '../hooks/useNearScreen';
import './styles/Project.scss';
import github from '../assets/svg/github.svg';
import forward from '../assets/svg/forward.svg';
export const Project = ({ project }) => {
    const [show, refElement] = useNearScreen();
    return (
        <article className="project" ref={refElement}>
            {show &&
                <div className="project__container">
                    <a href={project.pageUrl} target="_blank">
                        <img className="project__image" src={project.image} alt={project.title} />
                    </a>
                    <div className="project__description">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                    <nav className="project__links">
                        <a href={project.github} className="link" target="_blank">
                            <img src={github} alt="github" />
                        </a>
                        <a href={project.pageUrl} className="link" target="_blank">
                            <img src={forward} alt="webpage redirection" />
                        </a>
                    </nav>
                </div>
            }
        </article>
    )
}