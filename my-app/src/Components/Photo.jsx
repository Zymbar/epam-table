import * as React from 'react';
import '../styles/photo.css';

export default function Photo ({link, name}){
    return !!link && (
        <figure>
            <img src={link} alt={name} className="photo"/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}