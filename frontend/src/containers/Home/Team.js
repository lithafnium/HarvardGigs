import React from "react"; 
import {TeamContainer, TeamInner} from "./styles"
import Person from './Person'

const Team = () => {
    return(
        <div id = "team">
            <TeamContainer style = {{}}>
                <h1 style = {{color: "rgb(199, 0, 57)", 
                              fontSize: "3rem",
                              fontWeight: "300",
                              margin: "0px"}}>Meet the Team</h1>
            </TeamContainer>
            <TeamContainer style = {{marginBottom: "150px"}}>
                <hr style = {{border: "1.5px solid",
                            borderColor:"rgb(199, 0, 57)",
                            width: "200px"}}/>
            </TeamContainer>
            
            <TeamContainer>
                <TeamInner>
                    <Person color = {0} offset = {0} path = "/Lizzy.jpg" name = "Elizabeth Ling" role = "Frontend"/>
                    <Person color = {1} offset = {1} path = "/IMG-6432.JPG" name = "Steve Li" role = "Frontend"/>
                    <Person color = {2} offset = {2} path = "/Natalia.jpg" name = "Natalia Calvo" role = "Frontend"/>
                </TeamInner>
            </TeamContainer>
            <TeamContainer>
                <TeamInner>
                    <Person color = {3} offset = {1} path = "/Daniel.jpg" name = "Daniel Schwartz" role = "Backend"/>
                    <Person color = {4} offset = {2} path = "/David.jpg" name = "David Zhang" role = "Backend"/>
                </TeamInner>
            </TeamContainer>
        </div>

        
    ); 
}

export default Team; 