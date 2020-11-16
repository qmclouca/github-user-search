import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}
const ButtonIcon = ({ text }:Props) => (
    <div className="d-flex">
        <button className ="btn btn-primary btn-form">
            <h5 className = "btn-text">{text}</h5>
        </button> 
    </div>
);
export default ButtonIcon;
