import React from 'react'; 
import Card from './Card'; 
import {FaMoneyCheckAlt, FaShoppingCart, FaCommentDots, FaHubspot} from "react-icons/fa";
import {HomeContainer, Cards, VideoImage, HomeInner, AboutImage} from './styles'

const About = () => {
    
    return(
        <div  id = "about">
        <HomeContainer>
            <HomeInner>
            
                <AboutImage>
                    <img style = {{maxWidth: "100%", 
                                    height: "auto"}}src = "/shopping.svg"/>
                </AboutImage>
                <div style = {{width: "40%"}}>
                    <Cards>
                        <Card icon = {0} raised = {false} imgsrc = '/personalinfo.svg' title = "Sell"
                            text = "Secure transactions through our payment system - venmo or cash"/>
                        <Card icon = {1} raised = {true} imgsrc = '/schedule.svg' title = "Buy"
                            text = "Buy and sell products and services. HarvardGigs has never gotten easier."/>
                    </Cards>
                    <Cards>
                        <Card icon = {2}raised = {false} imgsrc = '/personalinfo.svg' title = "Contact"
                            text = "Contact others through secure messaging and calling (not our service)"/>
                        <Card icon = {3}raised = {true} imgsrc = '/schedule.svg' title = "Connect"
                            text = "Make new connections at Harvard! Add friends to your LinkedIn network for that juicy 500+ badge" />
                    </Cards>
                </div>
            </HomeInner>

        </HomeContainer>
        </div>
    ); 

}

export default About; 