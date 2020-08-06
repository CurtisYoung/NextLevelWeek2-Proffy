import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Images
import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

// CSS styles
import './styles.css'
import api from '../../services/api'

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=> {
        api.get('conections').then( response => {
            const {total} = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing"> 
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                
                <img src={landing} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="teach">
                        <img src={giveClassesIcon} alt="Ensinar"/>
                        Ensinar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas 
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing