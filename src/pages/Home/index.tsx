import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import ButtonIcon from './../../core/assets/components/ButtonIcon/index';

const Home = () => (
    <div>
        <div className = "row">
            <div className = "col-6 home-text">
                <h1 className = "text-title"> 
                    Desafio do Capítulo 3, <br/>
                    Bootcamp DevSuperior                
                </h1>
                <p className = "text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/>
                <br/>
                Favor observar as instruções passadas no capítulo sobre a elaboração <br/>
                deste projeto. <br/>
                <br/>
                Este design foi adaptado a partir de Ant Design System for Figma, de <br/>
                Mateusz Wierzbicki: <a href="antforfigma@gmail.com">antforfigma@gmail.com</a>
                <br/>
                <br/>
                </p>
                <Link to = "/search">
                    <ButtonIcon text="  Começar"/>
                </Link>
            </div>    
        </div>
    </div>
    
    

);
export default Home;