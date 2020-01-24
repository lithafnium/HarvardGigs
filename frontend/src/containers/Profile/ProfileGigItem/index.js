import React from 'react'
import { GigItemDiv, GigImg, Price, GigText, Delete } from './styles'
import { useMutation } from '@apollo/react-hooks'
import { DELETE, GET_VIEW_GIGS } from './graphql'

const PGigItem = ({ style, price, title, id, photo }) => {
    const [deletegig, { loading, error}] = useMutation(DELETE, {
        variables: {
            id
        },
        refetchQueries: () => [{query: GET_VIEW_GIGS }],
        onError: err => console.log(err)
    });
    if (loading) return <h2>Loading</h2>
    if (error) {
        return "Error!"
    }
    return (
        <GigItemDiv style={style}>
            <GigImg alt="sample" src={photo} />
            <Price>${price}</Price>
            <GigText>{title}</GigText>
            <GigText>descrip</GigText>
            <Delete onClick={deletegig}>Delete</Delete>
        </GigItemDiv>

    )
}
export default PGigItem