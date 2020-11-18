import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/assets/components/ButtonIcon';
import Form from '../../core/assets/components/Form';
import InformationsLoader from '../../core/assets/components/Loaders/InformationsLoader';
import ResultPhotoLoader from '../../core/assets/components/Loaders/ResultPhotoLoader';
import Results from '../../core/assets/components/Results';
import { makeRequest } from '../../core/assets/components/utils/request';
import { person }  from '../../core/assets/components/utils/types'
import './styles.scss';

type ParamsType = {
    login: string;
    }
    

const Search = () => {
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
    <div> 
        {isLoading ? <ResultPhotoLoader /> : (
            <>
            <div className="search-form-base">
                <h1><Form /></h1>
                <h1><Results /></h1>
                
            </div>
            <div>
                {person?.name}
                <img src={person?.avatar_url} alt={person?.name} />
                
            </div>
            <div>
                {isLoading ? <InformationsLoader /> : (
                    <>
                        <div><h1>Repositórios públicos: </h1></div>
                        <div><h1>Seguidores:</h1></div>
                        <div><h1>Seguindo:</h1></div>
                        <div>
                            <div><h1>Empresa:</h1></div>
                            <div><h1>Website/Blog:</h1></div>
                            <div><h1>Localidade:</h1></div>
                            <div><h1>Membro desde:</h1></div>
                        </div>
                        
                    </>
                )}
            </div>
            </>
        )}
    </div>
)
        
};

export default Search;
