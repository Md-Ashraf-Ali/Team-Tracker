import React, { useEffect, useLayoutEffect, useState } from 'react';
// import Header from '../Header/Header';
import League from '../League/League';
import './Home.css'

const Home = () => {
    const [leagues, setleagues] = useState([]);

    useEffect(()=>{
       
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
       .then(res => res.json())
       .then(data => setleagues(data.teams));
       
       


    },[])

    return (
        <div className="home-container">
             <div className="header-container">
                 {/* <Header> <img src= { leagues.strStadiumThumb} alt="logo image"/> </Header> */}
               {/* {
                  leagues.map(team => <li>{team.strStadiumThumb}</li>) 
               } */}
               {/* <Header></Header> */}
                
             </div>
             <div className="body-container">
                {
                    leagues.map(team => <League team={team}></League>)
                                        
                }
                
             </div>
        </div>
    );
};

export default Home; 