import React from 'react'
import {GigItemDiv, GigImg, Price, GigText} from './styles'

const GigItem = ({style}) => 
<GigItemDiv style={style}>
    <GigImg alt="sample" src="http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon-300x300.png"/>
    <Price>$0.00</Price>
    <GigText>title</GigText>
    <GigText>descrip</GigText>
</GigItemDiv>


export default GigItem
