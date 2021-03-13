import React from 'react';
import ImageMale from '../Image/Images/male.png';
// import Image from '../Image/Images/female.png';
import ImageTwitter from '../Image/Images/Twitter.png';
import ImageFacebook from '../Image/Images/Facebook.png';
import ImageYouTube from '../Image/Images/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPodcast,faFlag,faFutbol,faMars} from '@fortawesome/free-solid-svg-icons'
import './TeamCart.css';
import { layout, grid,Row,Col} from 'react-bootstrap';




const TeamCart = (props) => {
    const {strCountry,strStadiumThumb,strTeamBadge,strTeam,intFormedYear,strSport,strGender,strDescriptionDE,strDescriptionEN,strDescriptionES,strTwitter,strFacebook,strYoutube,strDescriptionPT} = props.singleTeam;
    return (
        <Row className="teamCart-container">
            <Row className="teamCartHeader-container">
                <div className="img-1">
                    <img src= {strStadiumThumb} alt=""/>
                    <div className="img-2">
                        <img src= {strTeamBadge} alt=""/>
                    </div>
                </div>
            </Row>
            <Row className="teamCartDetail-container">
               <Col className="playerCart">
                   <h1>{strTeam}</h1>
                   <p> <i><FontAwesomeIcon icon={faPodcast } /></i>  Founded: {intFormedYear}</p>
                   <p> <i><FontAwesomeIcon icon={faFlag} /></i> Country:{strCountry}</p>
                   <p> <i><FontAwesomeIcon icon={faFutbol} /></i> Sports Type:{strSport}</p>
                   <p> <i><FontAwesomeIcon icon={faMars} /></i> Gender: {strGender}</p>
               </Col>
               <Col className="team-image">
                   <img src={ImageMale} alt=""/>
               </Col>
            </Row>   
            <Row className="description-container">
                <p>{strDescriptionDE}</p>
                <p>{strDescriptionPT}</p>
                <p>{strDescriptionEN}</p>
            </Row>

            <Row className="footer">
                <a href={`https://${strTwitter}`}><img src={ImageTwitter} alt=""/> </a>
                <a href={`https://${strFacebook}`}><img src={ImageFacebook} alt=""/> </a>
                <a href={`https://${strYoutube}`}><img src={ImageYouTube} alt=""/> </a>
            </Row>
        

        </Row>
    );
};

export default TeamCart;