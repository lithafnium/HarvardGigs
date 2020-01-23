import React from 'react'
import {GigItemDiv, GigImg, Price, GigText} from './styles'

const GigItem = ({style, price, title, user}) => 
<GigItemDiv style={style}>
    <GigImg alt="sample" src="http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon-300x300.png"/>
    <Price>${price}</Price>
    <GigText>{title}</GigText>
    <GigText style = {{fontSize: "0.9rem",
                        marginTop: "5px"}}>{user.firstName} {user.lastName}</GigText>

</GigItemDiv>


export default GigItem
