import React from 'react'
import {GigItemDiv, GigImg, Price, GigText} from './styles'

const GigItem = ({style, price, title}) => 
<GigItemDiv style={style}>
    <GigImg alt="sample" src="http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon-300x300.png"/>
    <Price>${price}</Price>
    <GigText>{title}</GigText>
    <GigText>descrip</GigText>
</GigItemDiv>


export default GigItem
