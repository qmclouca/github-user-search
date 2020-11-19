import React from 'react';
import './styles.scss';
import { person } from '../utils/types';

type Props = {
    person: person; 
}

const PersonAvatar = ({ person }: Props) => (
    <div className = "card-base border-radius-10 product-card">
       <img src={person.avatar_url} alt={person.name} className="product-card-image"/>
    </div>
);

export default PersonAvatar;