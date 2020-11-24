import React from 'react';
import './styles.scss';

type Props = {
    title: string;
    children: React.ReactNode;
}

const SearchForm = ({title, children}: Props) => {
   
    return(
      <div className="search-form-container">
            <h1>
                {title}
            </h1>
            {children}
            <button className="btn btn-primary  btn-find btn-text">
                Encontrar
            </button>
        </div>
)
}
export default SearchForm;