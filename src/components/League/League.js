import React from 'react';
import { Link } from 'react-router-dom';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';


const League = (props) => {
    console.log(props);
    const {strTeam, strStadiumThumb, strTeamBadge, strSport, strAlternate, idTeam} = props.team;
    return (
        <div className="league-container">
            <img src={strTeamBadge} alt=""/>
            <h2>{strAlternate}</h2>
            <p>sports type : {strSport} </p>
            <Link to ={`/League/${idTeam}`}><Button variant="primary">Explore <i><FontAwesomeIcon icon={faArrowRight} /></i> </Button></Link>
            
        </div>
    );
};
export default League;