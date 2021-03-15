import React from 'react';
import HeaderImage from '../Image/Images/Header.jpg'
import './Header.css'

const Header = (props) => {

    return (
        <div className ="header-container">
            <div className="headerImage-container">
                <img src={HeaderImage} alt=" header images"/>
            </div>
            <div className="headerTitle-container">
                <h1>Team Tracker</h1>
            </div>
        </div>
    );
};

export default Header;