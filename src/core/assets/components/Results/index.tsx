import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../ButtonIcon';
import ButtonLoader from '../Loaders/ButtonLoader';
import InformationsLoader from '../Loaders/InformationsLoader';
import ResultPhotoLoader from '../Loaders/ResultPhotoLoader';
import './styles.scss';

const Results = () => (
<div className="search-results-base">
    <div className="row">
        <div className="col-3 search-results-photo align-self-start">
            <ResultPhotoLoader />
        </div>
        <div className="col-8 search-results-info align-self-start">
            <InformationsLoader />
        </div>
    </div>
    <div className="row">
        <div className="search-results-button col-2 align-self-end">
           <ButtonLoader />
        </div>
    </div>
</div>

);

export default Results