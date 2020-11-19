import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ButtonIcon from '../ButtonIcon';
import ButtonLoader from '../Loaders/ButtonLoader';
import InformationsLoader from '../Loaders/InformationsLoader';
import ResultPhotoLoader from '../Loaders/ResultPhotoLoader';
import PersonAvatar from '../PersonAvatar';
import { makeRequest } from '../utils/request';
import { person }  from '../utils/types'
import './styles.scss';

type ParamsType = {
    login: string;
}

const Results = () => {
    const {login} = useParams<ParamsType>();
    const [isLoading, setIsLoading] = useState(false);
    const [person, setPerson] = useState<person>();
    
    useEffect(() => {
        setIsLoading(true);
        makeRequest({url:`/${login}`})
            .then(response => setPerson(response.data))
            .finally(() => setIsLoading(false));
    }, [login]);

return (
<div className="search-results-base">
    <div className="row">
        <div className="col-3 search-results-photo align-self-start">
            {isLoading ? <ResultPhotoLoader /> : (
                <>
                <div>
                    Person Avatar
                </div> 
                </>
            )}
        </div>
        <div className="col-8 search-results-info align-self-start">
            {isLoading ? <InformationsLoader /> : (
                 <>
                 <div className="first-line-results-data">
                 <div className="public-repos">Repositórios públicos: {person?.public_repos}</div>
                 <div className="followers">Seguidores: {person?.followers}</div>
                 <div className="following">Seguindo: {person?.following}</div>
                 </div>
                 <div className="informations-card">
                     <h1 className="informations-card-font">Informações</h1>
                     <div className="info">Empresa:</div>
                     <div className="info">Website/Blog:</div>
                     <div className="info">Localidade:</div>
                     <div className="info">Membro desde:</div>
                 </div>
                 </>
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

export default Results