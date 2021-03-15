import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamCart from '../TeamCart/TeamCart';

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [team, setteam] = useState([]);

    console.log(team);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setteam(data.teams));
    },[idTeam])
    return (
        <div>
            {
                team.map(singleTeam => <TeamCart singleTeam = {singleTeam}></TeamCart>)
            }
            
        </div>
    );
};

export default TeamDetails;