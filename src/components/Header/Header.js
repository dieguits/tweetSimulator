import React from "react";
import TwitterLogo from '../../assets/img/twitterLogo.png'

import './Header.scss';

export default function Header() {
    return (
        <div className="header">
            <img src={TwitterLogo} alt="Tweets Simulator"></img>
            <h1>Simulador de Tweets</h1>
        </div>  
    );
}