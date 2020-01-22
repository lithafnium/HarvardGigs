import React from 'react';

const AboutCard = () => {
    return(
        <div className = "about-card">
            <img src = {props.imgsrc}/>
            <h2 className = "about-title">{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id.</p>
        </div>
    ); 
}

export default AboutCard; 