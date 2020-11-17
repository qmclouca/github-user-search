import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Form from '../../core/assets/components/Form';
import ResultPhotoLoader from '../../core/assets/components/Loaders/ResultPhotoLoader';
import Results from '../../core/assets/components/Results';
import { makeRequest } from '../../core/assets/components/utils/request';
import { person }  from '../../core/assets/components/utils/types'
import './styles.scss';

type ParamsType = {
    name: string;
}

const Search = () => {
    const {name} = useParams<ParamsType>();
    const [isLoading, setIsLoading] = useState(false);
    const [person, setPerson] = useState<person>();
    
    useEffect(() => {
        setIsLoading(true);
        makeRequest({url:`/${name}`})
            .then(response => setPerson(response.data))
            .finally(() => setIsLoading(false));
    }, [name]);

return (
    <div> 
        {isLoading ? <ResultPhotoLoader /> : (
            <div className="search-form-base">
                <h1><Form /></h1>
                <h1><Results /></h1>
            </div>
        )}
    </div>
)
        
};

export default Search;
