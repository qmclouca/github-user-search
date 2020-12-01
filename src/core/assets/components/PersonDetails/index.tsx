import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Person } from '../types/types';
import { useParams } from 'react-router';
import { makeRequest } from '../utils/request';


type ParamsType = {
    personId: string;
}

 const PersonDetails = () => {
    const {personId} = useParams<ParamsType>();
    const [person, setPerson] = useState<Person>();
    const [isLoading, setIsLoading] = useState(false);
    console.log(person);
    
    useEffect(() => {
        setIsLoading(true);
        makeRequest({url: `/${personId}`})
        .then (response => setPerson(response.data))
        .finally(() => setIsLoading(false));
    }, [personId]);

    return (
        <>
            <div className="first-line-results-data">
            <div className="public-repos">Repositórios públicos: {person?.public_repos}</div>
            <div className="followers">Seguidores: {person?.followers}</div>
            <div className="following">Seguindo: {person?.following}</div>
                </div>
                    <div className="informations-card">
                         <h1 className="informations-card-font">Informações</h1>
                        <div className="info">Empresa: {person?.company}</div>
                        <div className="info">Website/Blog: {person?.blog}</div>
                        <div className="info">Localidade: {person?.location}</div>
                        <div className="info">Membro desde: {person?.created_at}</div>
                    </div>
        </>
    )
}

export default PersonDetails;
