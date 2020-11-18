import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Form from '../../core/assets/components/Form';
import ResultPhotoLoader from '../../core/assets/components/Loaders/ResultPhotoLoader';
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
            </div>
            <div>
                {person?.name}
            </div>
            </>
        )}
    </div>
)
        
};

export default Search;
