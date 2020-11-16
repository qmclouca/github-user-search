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
         <rect x="0" y="0" rx="16" ry="16" width="1251" height="270" />
         <h1>
             {title}
         </h1>
         {children}
         <Link to = "/search">
           <ButtonIcon text="Encontrar" />
         </Link>
     </div>
 )
}
export default SearchForm;