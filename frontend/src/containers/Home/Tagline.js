import React, { useState } from 'react';
import {MainContainer, HeaderTagline, Heading, LearnMore, VideoImage} from './styles'
//import videocall from './videocall.svg'; 

const Tagline = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // Home, About, Team, Partners, Advisory Board, Contact Us, and Platform
  return (
    <MainContainer>
      <HeaderTagline>
          <Heading>
              <h1 style = {{fontSize: "4rem",
	                        marginBottom: "40px", 
	                        color: "#eeeeee"}}>Peer to Peer Marketplace</h1>
              <p style = {{marginBottom: "40px", 
                          fontSize: "1.2rem",
                          color: "#eeeeee" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id.</p>
              <LearnMore>Learn More</LearnMore>
          </Heading>    
          <VideoImage>
              <img style = {{maxWidth: "100%", 
                            height: "auto"}}src = "/buying.svg"/>
          </VideoImage>
      </HeaderTagline>
    </MainContainer>
  );
}

export default Tagline;