import React from 'react';
import './styles.scss';
import { Person } from '../utils/types';

type Props = {
    person: Person; 
}

const PersonAvatar = ({ person }: Props) => (
    <div className = "card-base border-radius-10 product-card">
       <img src={person.avatar_url} alt={person.name} className="product-card-image"/>
    </div>
);

export default PersonAvatar;