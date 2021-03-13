import React from 'react';
import { Link } from 'react-router-dom';
import './League.css';

const League = (props) => {
    console.log(props);
    const {strTeam, strStadiumThumb, strTeamBadge, strSport, strAlternate, idTeam} = props.team;
    return (
        <div className="league-container">
            
            {/* <div className="teamHeader-container"> */}
                {/* <img src={strStadiumThumb} alt=""/> */}
                {/* <h1>  Team Tracker</h1> */}
            {/* </div> */}
            <div className="teams-container">
                <img src={strTeamBadge} alt=""/>
                <h2>{strAlternate}</h2>
                <p>sports type : {strSport} </p>
                <Link to ={`/League/${idTeam}`}><button>Explore {idTeam} </button></Link>
            </div>
        </div>
    );
};

export default League;