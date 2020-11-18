import React from 'react';
import InformationsLoader from '../Loaders/InformationsLoader';
import ResultPhotoLoader from '../Loaders/ResultPhotoLoader';
import './styles.scss';

const Results = () => (
<div className="search-results-base">
    <div>
        <ResultPhotoLoader />
        <InformationsLoader />
    </div>
</div>
);

export default Results