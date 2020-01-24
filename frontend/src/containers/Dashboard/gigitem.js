import React from 'react'
import {GigItemDiv, GigImg, Price, GigText} from './styles'

const GigItem = ({style, price, title, user, photo}) => 
<GigItemDiv style={style}>
    <GigImg alt="sample" src={photo}/>
    <Price>${price}</Price>
    <GigText>{title}</GigText>
    <GigText style = {{fontSize: "0.9rem",
                        marginTop: "5px"}}>{user.firstName} {user.lastName}</GigText>

</GigItemDiv>


export default GigItem
