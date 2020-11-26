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
    console.log(person);
    useEffect(() => {
        makeRequest({url: `/${personId}`})
        .then (response => setPerson(response.data))
    }, [personId]);

    return (
        <>
        <div className="first-line-results-data">
                 <div className="public-repos">Repositórios públicos: </div>
                 <div className="followers">Seguidores: </div>
                 <div className="following">Seguindo: </div>
                 </div>
                 <div className="informations-card">
                     <h1 className="informations-card-font">Informações</h1>
                     <div className="info">Empresa: {person?.company}</div>
                     <div className="info">Website/Blog: {person?.blog}</div>
                     <div className="info"> </div>
                     <div className="info">Membro desde:</div>
                 </div>
        </>
    )
}

export default PersonDetails;
