import React from 'react';
import './styles/ListOfFeatures.scss';
export const ListOfFeatures = ({ features }) => {
    const listOfFeatures = features.map((feature) => (
        <article key={feature.name} className="feature">
            <div className="feature__image">
                <img src={feature.image} alt={feature.name} />
            </div>
            <p>{feature.text}</p>
        </article>

    ))
    return (
        <>
            {listOfFeatures}
        </>
    )
}