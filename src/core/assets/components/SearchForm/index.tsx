import React from 'react';
import './styles.scss';

type Props = {
    title: string;
    children: React.ReactNode;
}

const SearchForm = ({title, children}: Props) => {
   return(
     <div>
         <h1>
             {title}
         </h1>
         {children}
         <button>
             Encontrar
         </button>
     </div>
 )
}
export default SearchForm;