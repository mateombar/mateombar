import React from 'react';
import './styles/Project.scss';
export const Project = ({ project }) => {
    return (
        <article className="project">
            <a href={project.pageUrl} target="_blank">
                <img className="project__image" src={project.image} alt={project.title} />
            </a>
            <div className="project__description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </article>
    )
}