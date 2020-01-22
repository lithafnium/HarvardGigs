import React from 'react';
import {AboutCard, RaisedAboutCard} from './styles'
import {IconContext} from "react-icons"
import {FaMoneyCheckAlt, FaShoppingCart, FaCommentDots, FaHubspot} from "react-icons/fa";

const Card = (props) => {

    let icons = [<FaMoneyCheckAlt/>, <FaShoppingCart/>, <FaCommentDots/>, <FaHubspot/>]
    console.log(icons); 
    console.log(props.icon); 
    if(!props.raised){
        return(<AboutCard>
            <IconContext.Provider value={{size: "3em", color: "#C70039" , className: "global-class-name" }}>
                <div>
                    {icons[props.icon]}
                </div>
            </IconContext.Provider>
            <h2 className = "about-title">{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, . </p>
        </AboutCard>)
        
    } 
    return(
        
        <RaisedAboutCard>
            <IconContext.Provider value={{size: "3em", color: "#C70039" , className: "global-class-name" }}>
                <div>
                    {icons[props.icon]}
                </div>
            </IconContext.Provider>
            <h2 className = "about-title">{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
        </RaisedAboutCard>
    ); 
}

export default Card; 