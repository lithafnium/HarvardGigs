import React from 'react'; 
import Card from './Card'; 
import {FaMoneyCheckAlt, FaShoppingCart, FaCommentDots, FaHubspot} from "react-icons/fa";
import {HomeContainer, Cards, VideoImage, HomeInner, AboutImage} from './styles'

const About = () => {
    
    return(
        <HomeContainer>
            <HomeInner>
            
                <AboutImage>
                    <img style = {{maxWidth: "100%", 
                                    height: "auto"}}src = "/shopping.svg"/>
                </AboutImage>
                <div style = {{width: "40%"}}>
                    <Cards>
                        <Card icon = {0} raised = {false} imgsrc = '/personalinfo.svg' title = "Lorum"/>
                        <Card icon = {1} raised = {true} imgsrc = '/schedule.svg' title = "Ipsum"/>
                    </Cards>
                    <Cards>
                        <Card icon = {2}raised = {false} imgsrc = '/personalinfo.svg' title = "Lorum"/>
                        <Card icon = {3}raised = {true} imgsrc = '/schedule.svg' title = "Ipsum"/>
                    </Cards>
                </div>
            </HomeInner>

        </HomeContainer>
    ); 

}

export default About; 