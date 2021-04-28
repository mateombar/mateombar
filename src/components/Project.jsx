import React from 'react';
import { useNearScreen } from '../hooks/useNearScreen';
import './styles/Project.scss';
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
                </div>
            }
        </article>
    )
}