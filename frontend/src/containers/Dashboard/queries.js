import gql from 'graphql-tag'

export const GET_GIGS = gql`
 	query getGigs{
        getGigs{
            id
            userId
            title
            photo
            price
            createdAt   
        }
    }
    `