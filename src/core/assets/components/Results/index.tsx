import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ButtonIcon from '../ButtonIcon';
import ButtonLoader from '../Loaders/ButtonLoader';
import InformationsLoader from '../Loaders/InformationsLoader';

import { makeRequest } from '../utils/request';
import { Person, PersonResponse }  from '../types/types'
import './styles.scss';
import PersonDetails from './../PersonDetails/index';

type Props = {
    person: Person;
}

const PersonAvatar = ({ person }: Props) => (
    <div className = "card-base border-radius-10 product-card">
       <img src={person.avatar_url} alt={person.name} className="product-card-image"/>
    </div>
);

type ParamsType = {
    name: string;
}

const Results = () => {
    const [personResponse, setPersonResponse] = useState<PersonResponse>();
    const {name} = useParams<ParamsType>();
    const [isLoading, setIsLoading] = useState(false);
   
    
    useEffect(() => {
        setIsLoading(true);
        
        makeRequest({url:`/${name}`})
            .then(personResponse => setPersonResponse(personResponse.data))
            .finally(() => setIsLoading(false));
    }, [name]);

return (
<div className="search-results-base">
    <div className="row">
        <div className="col-3 search-results-photo align-self-start">
           
        </div>
        <div className="col-8 search-results-info align-self-start">
            {isLoading ? <InformationsLoader /> : (
                 <PersonDetails />
            )}
        </div>
    </div>
    <div className="row">
        <div className="search-results-button col-2 align-self-end">
           {isLoading ? <ButtonLoader /> : (
             <Link to="/Search">
                 <ButtonIcon text = "Ver Perfil" />
             </Link>
           )}
        </div>
    </div>
</div>
);}

export default Results;