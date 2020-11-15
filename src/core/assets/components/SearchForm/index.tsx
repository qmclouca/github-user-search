import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../ButtonIcon';
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
         <Link to = "/search">
            <ButtonIcon text="Encontrar"/>
         </Link>
     </div>
 )
}
export default SearchForm;