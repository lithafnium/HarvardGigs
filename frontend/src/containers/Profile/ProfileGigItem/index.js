import React from 'react'
import { GigItemDiv, GigImg, Price, GigText, Delete } from './styles'
import { useMutation } from '@apollo/react-hooks'
import {  DELETE } from './graphql'

const PGigItem = ({ style, price, title, id}) => {
    const [deletegig, { loading, error, data }] = useMutation(DELETE, {
        variables: {
            id
        },
        onError: err => console.log(err)
    });
    if (loading) return <h2>Loading</h2>
    if (error) {
        console.log(error);
        return (
            <GigItemDiv style={style}>
                <GigImg alt="sample" src="http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon-300x300.png" />
                <Price>${price}</Price>
                <GigText>${title}</GigText>
                <GigText>descrip</GigText>
                <Delete>Error</Delete>
            </GigItemDiv>
        )
    }
    return (
        <GigItemDiv style={style}>
            <GigImg alt="sample" src="http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon-300x300.png" />
            <Price>${price}</Price>
            <GigText>${title}</GigText>
            <GigText>descrip</GigText>
            <Delete onClick={deletegig}>Delete</Delete>
        </GigItemDiv>

    )
}
export default PGigItem