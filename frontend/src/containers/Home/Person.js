import React from 'react'
import {TeamMember, PersonImage, Role} from './styles'

const Person = (props) => {
    const offsets = [-40, -80, -120, -160, -200]
    const styles = {
        transform: `translateY(${offsets[props.offset]}px)`
    }
    const colors = ["#581845", "#900C3F", "#C70039", "#FF5733", "#FFC300"]; 
    return(
        <TeamMember>
            <PersonImage  style = {styles}>
                <img style = {{maxWidth: "100%", 
                           height: "auto", 
                           borderRadius: "2px", 
                           }} src = {props.path}></img>
                <h3 style = {{color: "#900c3F", textAlign: "center"}}>{props.name}</h3>
                <Role style = {{
                    backgroundColor: `${colors[props.color]}`,
                    color: "white"
                }}>
                    {props.role}
                </Role>
                
            </PersonImage>
            
        </TeamMember>

    ); 
}

export default Person; 