import React from 'react'
import { GigItemDiv, GigImg, Price, GigText, Delete } from './styles'
import ReactHover from 'react-hover'

const PGigItem = ({ style, price, title }) =>
    <GigItemDiv style={style}>
        <GigImg alt="sample" src="http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon-300x300.png" />
        <Price>${price}</Price>
        <GigText>${title}</GigText>
        <GigText>descrip</GigText>
        <Delete>Delete</Delete>
    </GigItemDiv>


export default PGigItem